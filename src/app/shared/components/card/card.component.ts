import { Component, Input } from '@angular/core';

import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() public card: Product;

  // public getMyStyles() {
  //   const myStyles = {
  //     'background-image': 'url(' + this.card.images[0].path + ')'
  //   };
  //   return myStyles;
  // }

}
