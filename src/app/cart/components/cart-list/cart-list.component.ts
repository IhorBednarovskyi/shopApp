import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from './../../services/cart.service';
import { CartProduct } from './../../models/cart-product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  productsList: Array<CartProduct>;
  totalBill: number;
  totalAmount: number;
  sortField = 'name';
  sortOrder = true;


  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.sub = this.cartService.channel1$.subscribe(() => {
        this.productsList = this.cartService.getProdutsInCart();
        this.totalBill = this.cartService.getTotalBill();
        this.totalAmount = this.cartService.getItemsNumber();
    });
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

  productAmountChange(): void {
      this.totalBill = this.cartService.getTotalBill();
      this.totalAmount = this.cartService.getItemsNumber();
  }

  removeProduct(name: string): void {
      this.cartService.removeProduct(name);
  }

  clearCart(): void {
      this.cartService.removeAllProduct();
      this.productsList = [];
  }

  changeSortValue(value: string): void {
    this.sortField = value;
  }

  changeSortOrder(value: string): void {
    this.sortOrder = JSON.parse(value);
  }
}
