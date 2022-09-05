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
  team: any;
  position: any;
  brand: any;

  constructor(private route: ActivatedRoute, private api: APIService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.api.getMoreInfo(this.id).subscribe((res) => {
      this.data = res.data;
    });
  }
}
