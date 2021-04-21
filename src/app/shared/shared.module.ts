import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { CardComponent } from './components/card/card.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalDetailComponent } from './components/modal-detail/modal-detail.component';
import { CarouselImagesComponent } from './components/carousel-images/carousel-images.component';
import { CardCarComponent } from './components/card-car/card-car.component';



@NgModule({
  declarations: [
    CardComponent,
    FilterComponent,
    HeaderComponent,
    ModalDetailComponent,
    CarouselImagesComponent,
    CardCarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    CardComponent,
    FilterComponent,
    HeaderComponent,
    ModalDetailComponent,
    CarouselImagesComponent,
    CardCarComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
