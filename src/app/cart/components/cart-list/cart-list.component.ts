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

  public productsList: Array<CartProduct>;
  public totalBill: number;
  public totalAmount: number;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.sub = this.cartService.channel1$.subscribe(() => {
        this.productsList = this.cartService.getProdutsInCart();
        this.calculateBill();
    });
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

  productAmountChange(): void {
      this.calculateBill();
  }

  removeProduct(name: string): void {
      this.cartService.removeProduct(name);
      this.calculateBill();
      this.productsList = this.cartService.getProdutsInCart();
  }

  clearCart(): void {
      this.cartService.removeAllProduct();
      this.productsList = [];
  }

  private calculateBill() {
      this.totalBill = this.cartService.getTotalBill();
      this.totalAmount = this.cartService.getItemsNumber();
  }
}
