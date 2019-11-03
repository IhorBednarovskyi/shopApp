import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { OrderModel } from './../models/order.model';

import { LocalStorageService } from './../../../../core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Array<OrderModel>;

  constructor(
    private localStorage: LocalStorageService
  ) {
    this.orders = this.localStorage.get('orders') || [];
  }

  getOrders(): Observable<OrderModel[]> {
    return of(this.orders);
  }

  createOrder(order: OrderModel): void {
    this.orders.push(order);
    this.localStorage.save('orders', this.orders);
  }

}
