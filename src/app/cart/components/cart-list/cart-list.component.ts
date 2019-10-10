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
    // если на ремув тоже будет что-то приходить в поток, то не нужно будет писать последние 3 строчки
      this.cartService.removeProduct(name);
      this.totalBill = this.cartService.getTotalBill();
      this.totalAmount = this.cartService.getItemsNumber();
      this.productsList = this.cartService.getProdutsInCart();
  }

  clearCart(): void {
      this.cartService.removeAllProduct();
      this.productsList = [];
  }
}
