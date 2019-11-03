import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// rxjs
import { Subscription } from 'rxjs';

import { OrderModel } from './models/order.model';
import { OrderService } from './services/order.service';
import { CartService } from './../../../cart/services/cart.service';
import { CartProduct } from './../../../cart/models/cart-product.model';

@Component({
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {
  order: OrderModel;
  totalBill: number;

  private sub: Subscription;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.order = new OrderModel('', '', []);


    this.sub = this.cartService.getProdutsInCart()
      .subscribe((products: Array<CartProduct>) => {
        this.order.productList = products;
        this.totalBill = this.cartService.getTotalBill();
      });
  }

  ngOnDestroy() {
    if (this.sub) {
        this.sub.unsubscribe();
    }
  }

  onSubmitOrder() {
    const order = {...this.order};

    this.orderService.createOrder(order);
    this.router.navigate(['/products-list']);
    this.cartService.removeAllProduct();
  }

  onCancel() {
    this.router.navigate(['/cart']);
  }

}
