import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, of } from 'rxjs';

import { Router } from '@angular/router';

import { CartService } from './../../services/cart.service';
import { CartProduct } from './../../models/cart-product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  productsList$: Observable<CartProduct[]>;
  totalBill: number;
  totalAmount: number;
  sortField = 'name';
  sortOrder = true;


  constructor(
    private cartService: CartService,
    private router: Router
    ) {}

  ngOnInit() {
    this.getCartInfo();
    this.sub = this.cartService.channel1$.subscribe(() => {
        this.getCartInfo();
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
      this.productsList$ = of([]);
  }

  changeSortValue(value: string): void {
    this.sortField = value;
  }

  changeSortOrder(value: string): void {
    this.sortOrder = JSON.parse(value);
  }

  private getCartInfo(): void {
        this.productsList$ = this.cartService.getProdutsInCart();
        this.totalBill = this.cartService.getTotalBill();
        this.totalAmount = this.cartService.getItemsNumber();
  }

  orderProducts(): void {
      this.router.navigate(['/order']);
  }
}
