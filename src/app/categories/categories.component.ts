import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categorias = ['shirt', 'pants', 'pijama', 'maquiagem', 'perfumaria'];
  storeCar$: Observable<any>;
  public counter = 0
  public dataParams = ''


  constructor(
    private router: Router,
    private relativeRouter: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.relativeRouter.params.subscribe(params => this.dataParams = params.genre)
  }

  public redirectCategory(data: string): void {
    this.router.navigate(['products', data ], { relativeTo: this.relativeRouter })
  }


}
