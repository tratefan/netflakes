import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSplideModule } from 'ngx-splide';

// Components
import { HeaderComponent } from './components/header/header.component';
import { AutoSearchComponent } from './components/auto-search/auto-search.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AutoSearchComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    NgxSplideModule
  ],
  exports: [
    HeaderComponent,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AutoSearchComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
