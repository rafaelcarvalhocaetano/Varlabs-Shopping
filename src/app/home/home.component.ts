import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from '../categories/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public genreList = ['male', 'feminine', 'infantile', 'footwear', 'beauty']
  public activeLink = this.genreList[0];

  constructor(
    private router: Router,
    private service: CategoryService
  ) { }

  ngOnInit(): void {

  }

  public redirectRouter(genre: string): void {
    this.activeLink = genre;
    this.router.navigate(['categories', genre]);
  }

}
