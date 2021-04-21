import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.scss']
})
export class CardCarComponent implements OnInit {

  public amountValue = new FormControl(1);
  public valueTotal = '22,99';
  public somaValores = 0;

  @Input() public product: Product;
  @Output() public removeElementOfCar = new EventEmitter<Product>();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  public addedCar(): void {
    this.amountValue.setValue(this.amountValue.value + 1);
    this.refreshValue(this.amountValue.value);
  }

  public removedCar(): void {
    if (this.amountValue.value > 0) {
      this.amountValue.setValue(this.amountValue.value - 1);
      this.refreshValue(this.amountValue.value);
    }
  }

  public refreshValue(valor: number): void {
    this.somaValores = this.multiplicar(this.valueTotal, valor);
  }

  public multiplicar(string, multiplicador): number {
    const numero = string.replace(',','.');
    return +parseFloat(numero).toFixed(2) * multiplicador;
  }

  public getMyStyles() {
    const myStyles = {
      'background-image': 'url(' + '' + ')'
    };
    return myStyles;
  }

  public removeOfCar(product: Product): void {
    this.removeElementOfCar.emit(product)
  }

}
