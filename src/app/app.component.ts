import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public typesOfShoes: { icon: string; path: string }[] = [
    {
      icon: "sell",
      path: "Promo"
    },
    {
      icon: "credit_card",
      path: "credit_card"
    },
    {
      icon: "manage_accounts",
      path: "manage_accounts"
    },
    {
      icon: "settings",
      path: "settings"
    },
    {
      icon: "logout",
      path: "Logout"
    }
  ];

  constructor(
    private _location: Location
  ) { }

  public redirectRouter(): void {
    this._location.back();
  }


  actionClick(shoe) {

  }

}
