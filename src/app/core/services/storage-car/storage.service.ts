import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';

import { addItemCar } from 'src/app/redux/actions/store.action';
import { AppState } from 'src/app/redux/store/app.store';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private store: Store<AppState>
  ) { }

  public addNewProduct(product: any): void {
    let items = []
    const getItem = JSON.parse(localStorage.getItem('car') || '[]')
    if (getItem.length) {
      items.push(...getItem)
    }
    items.push(product)
    this.store.dispatch(addItemCar({ amountStoreCar: items.length }))
    localStorage.setItem('car', JSON.stringify(items))
  }

  public getItem(): Observable<any> {
    const items = JSON.parse(localStorage.getItem('car') || '[]');
    return of(items || []);
  }


  public removeItem(item: Product): void {
    const items = JSON.parse(localStorage.getItem('car') || '[]');

    items.forEach((product: Product, i: number) => {
      if (product.id === item.id) {
        items.splice(i, 1)
      }
    })
    localStorage.setItem('car', JSON.stringify(items))
    this.store.dispatch(addItemCar({ amountStoreCar: items.length }))
    localStorage.setItem('car', JSON.stringify(items))
  }
}
