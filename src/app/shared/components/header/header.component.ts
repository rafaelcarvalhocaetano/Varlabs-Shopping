import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { StorageService } from 'src/app/core/services/storage-car/storage.service';
import { addItemCar } from 'src/app/redux/actions/store.action';
import { AppState } from 'src/app/redux/store/app.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public counterCar = 0;
  @Output() showSide = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private serviceLocal: StorageService
  ) { }


  ngOnInit(): void {
   this.notificationLocal();
  }

  private notificationLocal(): void {
    this.serviceLocal.getItem().subscribe(resp => {
      this.store.dispatch(addItemCar({ amountStoreCar: resp.length }))
    })
    this.store.select('amountStoreCar').subscribe(respCounter => this.counterCar = respCounter.amountStoreCar)
  }

  public routerNavigate(event: string): void {
    this.router.navigateByUrl(`${event}`);
  }

}
