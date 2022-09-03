import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  constructor(private route: Router) {}
  onClick(): void {
    this.route.navigate(['/main']);
  }
  onClickList(): void {
    this.route.navigate(['/list']);
  }

  ngOnInit(): void {}
}
