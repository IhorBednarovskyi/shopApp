import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, switchMap, concatMap, map } from 'rxjs/operators';

import { CartProduct } from './../models/cart-product.model';
import { Product } from './../../products/models/product.model';

import { CartAPI } from './../cart.config';

@Injectable({
  providedIn: 'root'
})
export class CartObservableService {
  constructor(
    private http: HttpClient,
    @Inject(CartAPI) private cartUrl: string
  ) {}

  getProductsInCart(): Observable<CartProduct[]> {
    return this.http.get<CartProduct[]>(this.cartUrl).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getProdut(id: number): Observable<CartProduct> {
    const url = `${this.cartUrl}/${id}`;

    return this.http.get<CartProduct>(url)
        .pipe(
            retry(3),
            catchError(this.handleError)
        );
  }

  addProductInCart(product: Product) {
    const url = `${this.cartUrl}/${product.id}`;
    return this.getProductsInCart()
      .pipe(
          switchMap(items => {
            const cartPoduct = items.filter(item => product.id === item.id);
            const amount = cartPoduct.length ? cartPoduct[0].amount : 0;
            return this.createProduct(product, amount);
          })
      );
  }

  updateProduct(product: CartProduct) {
    const url = `${this.cartUrl}/${product.id}`;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.updateHandler(url, body, options);
  }

  private createProduct(product: Product, amount: number) {
    const url = !amount ? this.cartUrl : `${this.cartUrl}/${product.id}`;
    const body = JSON.stringify({
      id: product.id,
      name: product.name,
      price: product.price,
      amount: amount ? ++amount : 1
    });
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return !amount ? this.createHandler(url, body, options) :
        this.updateHandler(url, body, options);
  }

  private createHandler(url, body, options) {
    return this.http
      .post<Product>(url, body, options);
  }

  private updateHandler(url, body, options) {
    return this.http
      .put<CartProduct>(url, body, options);
  }


  removeProduct(id: number): Observable<CartProduct[]> {
    const url = `${this.cartUrl}/${id}`;

    return this.http.delete(url)
      .pipe(
        concatMap(() => this.getProductsInCart())
      );
  }

  removeAllProduct() {
    return this.getProductsInCart()
    .pipe(
      switchMap(list => {
        return this.removeAll(list.map((item: CartProduct) => +item.id));
      })
    );
  }

  getTotalBill(itemList: CartProduct[]): number {
    return itemList.reduce((price: number, item: CartProduct) => {
        return price + item.amount * item.price;
    }, 0);
  }

  getItemsNumber(itemList: CartProduct[]): number {
      return itemList.reduce((count: number, item: CartProduct) => {
          return count + item.amount;
      }, 0);
  }

  private removeAll(list: number[]): Observable<any> {
    const url = `${this.cartUrl}/${list.join(',')}`;

    return this.http.delete(url)
      .pipe(
          catchError( this.handleError )
      );
  }

  private handleEmptyItem(err: HttpErrorResponse) {
    if (err.status === 404) {
      return of(null);
    }

    return throwError('Error.');
  }

  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      console.error(`${err.status}: ${err.error}`);
    }

    return throwError('Error.');
  }
}
