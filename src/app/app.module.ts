import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaptopModule } from './features/laptop/laptop.module';
import { MainModule } from './features/main/main.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MainModule,
    HttpClientModule,
    LaptopModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
