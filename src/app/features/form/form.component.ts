import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/shared/api.service';

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
    console.log(e.target.value);
    this.api.getPositionMethod().subscribe((res) => {
      this.positionList = res.data.filter((obj: any) => {
        return obj.team_id == this.teamId;
      });
      console.log(res);
      console.log(res.data);
      console.log(this.positionList);
    });
  }

  positionValueChange(e: any) {}
  storageValues: any;
  returnedValues: any;

  ngOnInit(): void {
    this.underLineBoolean = true;
    this.api.getTeamMethod().subscribe((res) => {
      this.teamList = res.data;
      console.log(this.teamList);
    });

    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      team: new FormControl('', [Validators.required]),
      position: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
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
      console.log(res);
      console.log(res.data);
      console.log(this.positionList);
    });
  }
  onClick(): void {
    console.log(this.formGroup);
    if (this.formGroup.valid) {
      this.underLineBoolean = false;
      this.userInfo = this.formGroup.value;
      localStorage.setItem('formValues', JSON.stringify(this.formGroup.value));
      this.route.navigate(['./laptop']);
    }
  }
}
