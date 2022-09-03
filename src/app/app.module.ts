import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaptopModule } from './features/laptop/laptop.module';
import { MainModule } from './features/main/main.module';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupModule } from './features/laptop/popup/popup.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './features/list/list.component';
import { ListModule } from './features/list/list.module';
import { DetailsModule } from './features/list/details/details.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MainModule,
    HttpClientModule,
    LaptopModule,
    MatDialogModule,
    PopupModule,
    BrowserAnimationsModule,
    ListModule,
    DetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
