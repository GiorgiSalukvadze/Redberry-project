import { Component, HostListener, OnInit } from '@angular/core';
import {
  EmailValidator,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from 'src/app/shared/api.service';
import {
  RxReactiveFormsModule,
  RxwebValidators,
} from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @HostListener('window:beforeunload')
  saveValues() {
    localStorage.setItem('formValues', JSON.stringify(this.formGroup.value));
  }

  formGroup!: FormGroup;
  numRegex = '^[+][0-9]{12}$';
  teamList: any;
  positionList: any;
  teamId!: number;
  userInfo: [] = [];
  underLineBoolean!: boolean;

  constructor(private api: APIService, private route: Router) {}

  teamValueChange(e: any) {
    this.teamId = e.target.value;
    this.api.getPositionMethod().subscribe((res) => {
      this.positionList = res.data.filter((obj: any) => {
        return obj.team_id == this.teamId;
      });
    });
  }

  positionValueChange(e: any) {}
  storageValues: any;
  returnedValues: any;

  ngOnInit(): void {
    this.underLineBoolean = true;
    this.api.getTeamMethod().subscribe((res) => {
      this.teamList = res.data;
    });

    this.formGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/[ა-ჰ]/g),
      ]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/[ა-ჰ]/g),
      ]),
      team: new FormControl('', [Validators.required]),
      position: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.email,
        RxwebValidators.endsWith({ value: 'redberry.ge' }),
      ]),
      tel: new FormControl('', [
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(13),
        Validators.pattern(this.numRegex),
      ]),
    });

    this.storageValues = localStorage.getItem('formValues');
    this.returnedValues = JSON.parse(this.storageValues);
    if (this.returnedValues) {
      this.formGroup.setValue({
        name: this.returnedValues.name,
        surname: this.returnedValues.surname,
        team: this.returnedValues.team,
        position: this.returnedValues.position,
        email: this.returnedValues.email,
        tel: this.returnedValues.tel,
      });
    }

    this.api.getPositionMethod().subscribe((res) => {
      this.positionList = res.data.filter((obj: any) => {
        this.teamId = this.returnedValues.team;
        return obj.team_id == this.teamId;
      });
    });
  }
  onClick(): void {
    if (this.formGroup.valid) {
      this.underLineBoolean = false;
      this.api.hasUserInfo = true;
      this.userInfo = this.formGroup.value;
      this.api.setUser(this.userInfo);
      localStorage.setItem('formValues', JSON.stringify(this.formGroup.value));
      this.route.navigateByUrl('/laptop');
    } else {
      alert('Please fill the form');
    }
  }
}
