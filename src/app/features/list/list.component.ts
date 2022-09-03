import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { APIService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  data: any;

  constructor(private api: APIService) {}

  ngOnInit(): void {
    this.api.getLaptopMethod().subscribe((res) => {
      this.data = res.data;
      console.log(this.data);
    });
  }
}
