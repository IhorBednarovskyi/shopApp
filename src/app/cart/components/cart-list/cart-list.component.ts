import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as CartActions from './../../../core/@ngrx/cart/cart.actions';

import { AppState, getCartProducts, getCartError } from './../../../core/@ngrx';

import * as RouterActions from './../../../core/@ngrx/router/router.actions';

import { CartObservableService } from './../../services';
import { CartProduct } from './../../models/cart-product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  cartError$: Observable<Error | string>;
  cartProducts: CartProduct[];

  private sub: Subscription;

  totalBill: number;
  totalAmount: number;
  sortField = 'name';
  sortOrder = true;


  constructor(
    private cartObservableService: CartObservableService,
    private store: Store<AppState>
    ) {}

  ngOnInit() {
    this.sub = this.store.pipe(select(getCartProducts))
      .subscribe(products => {
          this.cartProducts = products;
          this.calculateData();
        },
        err => console.log(err)
    );

    this.cartError$ = this.store.pipe(select(getCartError));
    this.store.dispatch(new CartActions.GetCartProducts());
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  saveChanges(product: CartProduct): void {
      this.store.dispatch(new CartActions.UpdateCartProduct(product));
      this.calculateData();
  }

  removeProduct(id: number): void {
      this.store.dispatch(new CartActions.DeleteCartProduct(id));
      this.calculateData();
  }

  clearCart(): void {
      this.store.dispatch(new CartActions.DeleteAllCartProducts());
  }

  changeSortValue(value: string): void {
    this.sortField = value;
  }

  changeSortOrder(value: string): void {
    this.sortOrder = JSON.parse(value);
  }

  private calculateData(): void {
      this.totalBill = this.cartObservableService.getTotalBill(this.cartProducts);
      this.totalAmount = this.cartObservableService.getItemsNumber(this.cartProducts);
  }

  orderProducts(): void {
      this.store.dispatch(new RouterActions.Go({ path: ['/order'] }));
  }
}
