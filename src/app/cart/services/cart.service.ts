import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { CartProduct } from './../models/cart-product.model';

@Injectable()
export class CartService {
    private channel1 = new Subject();
    private itemList: Array<CartProduct> = [];

    public channel1$ = this.channel1.asObservable();

    getProdutsInCart(): Array<CartProduct> {
        return this.itemList;
    }

    addProductInCart(name: string, price: number): void {
        let item = this.itemList.find(item => item.getName() === name);

        if (item) {
            item.changeAmount(1);
        } else {
            item = new CartProduct(name, price);
            this.itemList.push(item);
        }
        this.channel1.next();
    }

    getTotalBill(): number {
        return this.itemList.reduce((price: number, item: CartProduct) => {
            return price + item.getTotalPrice();
        }, 0);
    }

    getItemsNumber(): number {
        return this.itemList.reduce((count: number, item: CartProduct) => {
            return count + item.getAmount();
        }, 0);
    }

    removeProduct(name: string): void {
        this.itemList = this.itemList.filter(item => item.getName() !== name);
    }

    removeAllProduct(): void {
        this.itemList = [];
    }
}
