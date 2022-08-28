import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss'],
})
export class LaptopComponent implements OnInit {
  underLineBoolean!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.underLineBoolean = false;
  }
}
