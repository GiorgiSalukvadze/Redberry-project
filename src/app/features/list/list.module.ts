import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { DetailsComponent } from './details/details.component';
import { DetailsModule } from './details/details.module';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ListRoutingModule, DetailsModule],
})
export class ListModule {}
