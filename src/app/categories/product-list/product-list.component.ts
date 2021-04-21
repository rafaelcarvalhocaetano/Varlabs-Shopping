import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Product } from 'src/app/core/models/product';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productTypes: Product[] = [];

  constructor(
    private router: Router,
    private relativeRouter: ActivatedRoute,
    private service: CategoryService
  ) { }

  ngOnInit(): void {
    this.relativeRouter.params.subscribe((x: Params) => {
      this.service.getCategoriesToTypes(x).subscribe(resp => this.productTypes = resp)
    });
  }

  public redirectRouter(product: Product): void {
    this.router.navigate(['product', product.id ], { relativeTo: this.relativeRouter })
  }

}
