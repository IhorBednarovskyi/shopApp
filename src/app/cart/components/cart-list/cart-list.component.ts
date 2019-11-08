import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, of } from 'rxjs';

import { Router } from '@angular/router';

import { CartObservableService } from './../../services';
import { CartProduct } from './../../models/cart-product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private productsSub: Subscription;

  products: CartProduct[];
  totalBill: number;
  totalAmount: number;
  sortField = 'name';
  sortOrder = true;


  constructor(
    private cartObservableService: CartObservableService,
    private router: Router
    ) {}

  ngOnInit() {
    this.getCartInfo();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    if (this.productsSub) {
      this.productsSub.unsubscribe();
    }
  }

  saveChanges(product: CartProduct): void {
      this.cartObservableService.updateProduct(product)
      .subscribe(
        console.log,
        console.error,
        () => console.log('completed httpResult$')
      );
      this.calculateData();
  }

  removeProduct(id: number): void {
      this.sub = this.cartObservableService.removeProduct(id)
      .subscribe(value => {
        this.products = value || [];
        this.calculateData();
      });
  }

  clearCart(): void {
      this.cartObservableService.removeAllProduct()
      .subscribe(value => {
        this.products = [];
        this.totalBill = 0;
        this.totalAmount = 0;
      });
  }

  changeSortValue(value: string): void {
    this.sortField = value;
  }

  changeSortOrder(value: string): void {
    this.sortOrder = JSON.parse(value);
  }

  private getCartInfo(): void {
    this.productsSub = this.cartObservableService.getProductsInCart()
        .subscribe(value => {
            this.products = value || [];
            this.calculateData();
        });
  }

  private calculateData(): void {
      this.totalBill = this.cartObservableService.getTotalBill(this.products);
      this.totalAmount = this.cartObservableService.getItemsNumber(this.products);
  }

  orderProducts(): void {
      this.router.navigate(['/order']);
  }
}
