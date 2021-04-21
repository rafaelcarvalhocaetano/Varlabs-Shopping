import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent } from './categories.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryService } from './services/category.service';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  {
    path: ':genre',
    component: CategoriesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
      // {
      //   path: 'products/:type',
      //   component: ProductListComponent
      // },
      // {
      //   path: 'product/:id',
      //   component: ProductComponent
      // },
      // {
      //   path: 'products/:type/product/:id',
      //   component: ProductComponent
      // }
    ]
  },
  {
    path: ':genre/products/:type',
    component: ProductListComponent
  },
  {
    path: ':genre/product/:id',
    component: ProductComponent
  },
  {
    path: ':genre/products/:type/product/:id',
    component: ProductComponent
  }
];


@NgModule({
  declarations: [CategoriesComponent, ProductComponent, HomeComponent, ProductListComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    // StoreModule.forFeature('counter', storeCarReducer)
  ],
  providers: [
    CategoryService
  ]
})
export class CategoriesModule { }
