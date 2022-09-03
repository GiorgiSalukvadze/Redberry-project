import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop.component';
import { LaptopRoutingModule } from './laptop-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupModule } from './popup/popup.module';

@NgModule({
  declarations: [LaptopComponent],
  imports: [
    CommonModule,
    LaptopRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    PopupModule,
  ],
})
export class LaptopModule {}
