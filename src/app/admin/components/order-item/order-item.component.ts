import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';


import { OrderModel } from './../../../layout/components/order/models/order.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderItemComponent implements OnInit {
    @Input() order: OrderModel;

  constructor() { }

  ngOnInit() {
  }

}
