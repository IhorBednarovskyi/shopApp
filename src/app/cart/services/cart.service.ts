import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { CartProduct } from './../models/cart-product.model';
import { Product } from './../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    private channel1 = new Subject();
    private itemList: Array<CartProduct> = [];

    public channel1$ = this.channel1.asObservable();

    getProdutsInCart(): Array<CartProduct> {
        return this.itemList;
    }

    addProductInCart(product: Product): void {
        let itemAmount: number;
        const tempItemList: Array<CartProduct> = this.itemList.filter(item => {
            const isName: boolean = item.getName() === product.name;
            if (isName) {
                itemAmount = item.amount;
            }
            return !isName;
        });
        const addedItem: CartProduct = new CartProduct(product.name, product.price,
            (itemAmount ? ++itemAmount : 1));

        this.itemList = [...tempItemList, addedItem];
        this.channel1.next();
    }

    getTotalBill(): number {
        return this.itemList.reduce((price: number, item: CartProduct) => {
            return price + item.getTotalPrice();
        }, 0);
    }

    getItemsNumber(): number {
        return this.itemList.reduce((count: number, item: CartProduct) => {
            return count + item.amount;
        }, 0);
    }

    removeProduct(name: string): void {
        this.itemList = this.itemList.filter(item => item.getName() !== name);
        this.channel1.next();
    }

    removeAllProduct(): void {
        this.itemList = [];
    }
}
