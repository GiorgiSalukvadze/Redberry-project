import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop.component';
import { LaptopRoutingModule } from './laptop-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LaptopComponent],
  imports: [CommonModule, LaptopRoutingModule, ReactiveFormsModule],
})
export class LaptopModule {}
