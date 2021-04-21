import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Product } from 'src/app/core/models/product';
import { ModalDetailComponent } from 'src/app/shared/components/modal-detail/modal-detail.component';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listCategories$:  Observable<Product[]> = new Observable();
  public typesOfShoes: string[] = ['Acessórios', 'Camisetas', 'Camisas', 'Calças', 'Bermudas'];
  public paramsType = null;

  constructor(
    private service: CategoryService,
    private router: Router,
    private relativeRouter: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.relativeRouter.params.subscribe(x => {
      this.listCategories$ = this.service.productsForGender(x.genre)
    })
    // this.listCategories$ = this.service.getCategories();
  }

  public openDialog() {
    const dialogRef = this.dialog.open(ModalDetailComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  public redirectRouter(categroy: Product): void {
    this.router.navigate(['product', categroy.id], { relativeTo: this.relativeRouter })
  }
}
