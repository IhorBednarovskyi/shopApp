import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { OrderService } from './../../../layout/components/order/services/order.service';
import { OrderModel } from './../../../layout/components/order/models/order.model';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  ordersList$: Observable<OrderModel[]>;

  constructor(
      private orderService: OrderService
  ) {}

  ngOnInit() {
      this.ordersList$ = this.orderService.getOrders();
  }

}
