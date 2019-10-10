import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { CartProduct } from './../models/cart-product.model';

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

    addProductInCart(name: string, price: number): void {
        let item = this.itemList.find(x => x.getName() === name);

        if (item) {
            item.changeAmount(1);
        } else {
            item = new CartProduct(name, price);
            // тут мутирование данных
            this.itemList.push(item);
        }
        this.channel1.next(); // почему только при добавлении вызывается этот метод, а при удалении нет?
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
      // а тут немутирование данных. желательно один подход использовать push + splice, spread + filter
        this.itemList = this.itemList.filter(item => item.getName() !== name);
    }

    removeAllProduct(): void {
        this.itemList = [];
    }
}
