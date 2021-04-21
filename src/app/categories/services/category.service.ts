import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';

import { Observable } from 'rxjs';

import { Product } from 'src/app/core/models/product';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private URL = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  public getCategories(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.URL}/products`)
  }

  public getCategoriesToTypes(params: Params): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.URL}/products?type=${params.type}&gender=${params.genre}`)
  }

  public productsForGender(genre: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.URL}/products?gender=${genre}`)
  }

  public getProductId(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.URL}/products/${id}`)
  }


}
