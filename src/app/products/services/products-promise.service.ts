import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsPromiseService {
  private productsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Promise<Product[]> {
    return this.http
      .get(this.productsUrl)
      .toPromise()
      .then(response => response as Product[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}