import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from './../../products/models/product.model';

interface ItemList {
    [key: string]: Product;
}

@Injectable()
export class CartService {
    private channel1 = new Subject();
    private itemList: ItemList = {}; // а есть смысл в таком хранении, чтобы делать преобразование к массиву?

    public channel1$ = this.channel1.asObservable();

    getProdutsInCart(): Array<Product> {
        const nameList: Array<string> = Object.keys(this.itemList);
        let cartItems: Array<Product> = [];
        if (nameList.length) {
            cartItems = Object.keys(this.itemList).map((name: string) => {
                const item: Product = this.itemList[name];
                return item;
            });
        }

        return cartItems;
    }

    addProductInCart(product: Product): void {
        const name: string = product.name;
        if (name in this.itemList) {
            this.itemList[name].amount++;
        } else {
            this.itemList[name] = product;
            this.itemList[name].amount = 1;
        }

        this.channel1.next();
    }

    getTotalBill(): number {
        return Object.keys(this.itemList).reduce((price: number, name: string) => {
            const item: Product = this.itemList[name];
            return price + item.price * item.amount;
        }, 0);
    }

    getItemsNumber(): number {
        return Object.keys(this.itemList).reduce((amount: number, name: string) => {
            const item: Product = this.itemList[name];
            return amount + item.amount;
        }, 0);
    }

    productAmountChange(poduct: Product): void {
        const name: string = poduct.name;
        this.itemList[name] = poduct;
    }

    removeProduct(name: string): void {
        delete this.itemList[name];
    }

    removeAllProduct(): void {
        this.itemList = {};
    }
}
