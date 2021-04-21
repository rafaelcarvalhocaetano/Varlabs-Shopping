import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../core/services/storage-car/storage.service';


@Component({
  selector: 'app-store-car',
  templateUrl: './store-car.component.html',
  styleUrls: ['./store-car.component.scss']
})
export class StoreCarComponent implements OnInit {

  public emptyCard = false;

  listItem$: Observable<any>;

  list = []

  constructor(
    private storage: StorageService
  ) { }

  ngOnInit(): void {
    this.refreshLocal();
  }

  public refreshLocal(): void {
    this.listItem$ = this.storage.getItem();
  }

  public clearItem() {
    localStorage.clear();
    this.refreshLocal();
  }

  public removedElement(productRemoved): void {
    this.storage.removeItem(productRemoved);
    this.refreshLocal();
  }

}
