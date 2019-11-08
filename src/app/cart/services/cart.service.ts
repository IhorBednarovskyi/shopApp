import { Injectable } from '@angular/core';
import { Subject, Observable, of, throwError } from 'rxjs';
import { map, catchError  } from 'rxjs/operators';

import { CartProduct } from './../models/cart-product.model';
import { Product } from './../../products/models/product.model';
import { LocalStorageService } from './../../core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    private channel1 = new Subject();
    private itemList: Array<CartProduct> = [];

    public channel1$ = this.channel1.asObservable();

    constructor(
      private localStorage: LocalStorageService
    ) {
      this.itemList = this.localStorage.get('cartProducts') || [];
    }

    getProductsInCart(): Observable<CartProduct[]> {
        return of(this.itemList);
    }

    getProduct(id: number | string): Observable<CartProduct> {
      return this.getProductsInCart()
        .pipe(
          map((products: Array<CartProduct>) => products.find(product => product.id === +id)),
          catchError(err => throwError('Error in getProduct method'))
        );
    }

    addProductInCart(product: Product): void {
        let itemAmount: number;
        const tempItemList: Array<CartProduct> = this.itemList.filter(item => {
            const isName: boolean = item.name === product.name;
            if (isName) {
                itemAmount = item.amount;
            }
            return !isName;
        });
        const addedItem: CartProduct = new CartProduct(product.id, product.name, product.price,
            (itemAmount ? ++itemAmount : 1));

        this.itemList = [...tempItemList, addedItem];
        this.localStorage.save('cartProducts', this.itemList);
        this.channel1.next();
    }

    getTotalBill(): number {
        return this.itemList.reduce((price: number, item: CartProduct) => {
            return price + item.amount * item.price;
        }, 0);
    }

    getItemsNumber(): number {
        return this.itemList.reduce((count: number, item: CartProduct) => {
            return count + item.amount;
        }, 0);
    }

    removeProduct(name: string): void {
        this.itemList = this.itemList.filter(item => item.name !== name);
        this.localStorage.save('cartProducts', this.itemList);
        this.channel1.next();
    }

    removeAllProduct(): void {
        this.itemList = [];
        this.localStorage.save('cartProducts', this.itemList);
    }
}
