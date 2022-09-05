import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { APIService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id: any;
  data: any;
  constructor(private route: ActivatedRoute, private api: APIService) {}
  onClick() {
    console.log('ait');
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    console.log(this.id);
    this.api.getMoreInfo(this.id).subscribe((res) => {
      this.data = res.data;
      console.log(this.data);
    });
  }
}
