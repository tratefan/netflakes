import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { BrowseComponent } from './browse/browse.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ShowDetailsComponent } from './show-details/show-details.component';



@NgModule({
  declarations: [
    PagesComponent,
    BrowseComponent,
    ShowDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
