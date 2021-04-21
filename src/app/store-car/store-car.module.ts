import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreCarComponent } from './store-car.component';
import { SharedModule } from '../shared/shared.module';



const routes: Routes = [
  {
    path: '',
    component: StoreCarComponent,
  }

];

@NgModule({
  declarations: [StoreCarComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class StoreCarModule { }
