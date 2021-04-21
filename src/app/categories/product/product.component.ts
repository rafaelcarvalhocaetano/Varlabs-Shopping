import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Product } from 'src/app/core/models/product';
import { StorageService } from 'src/app/core/services/storage-car/storage.service';
import { addItemCar } from 'src/app/redux/actions/store.action';
import { AppState } from 'src/app/redux/store/app.store';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public loader = false;
  public productDetail: Product;
  public selectedSize = null;


  constructor(
    private relativeRouter: ActivatedRoute,
    private router: Router,
    private storageService: StorageService,
    private serviceCategory: CategoryService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.loader = true
    this.relativeRouter.params.subscribe(params => {
      if (params !== null) {
        this.serviceCategory.getProductId(params.id).subscribe(response => {
          this.productDetail = response;
          this.loader = false;
        });
      }
    })
  }

  public addItemCar(): void {
    this.store.dispatch(addItemCar({ amountStoreCar: 1 }))
    this.storageService.addNewProduct(this.productDetail)
  }

  public navigationCar(): void {
    this.router.navigate(['store-car'])
  }

  public selectSize(data): void {
    this.selectedSize = data;
  }

}
