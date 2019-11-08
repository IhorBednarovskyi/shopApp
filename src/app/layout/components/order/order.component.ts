import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// rxjs
import { Subscription } from 'rxjs';
import { share } from 'rxjs/operators';

import { OrderModel } from './models/order.model';
import { OrderService } from './services/order.service';
import { CartObservableService } from './../../../cart/services';
import { CartProduct } from './../../../cart/models/cart-product.model';

@Component({
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {
  order: OrderModel;
  totalBill: number;

  private sub: Subscription;
  private clearSub: Subscription;

  constructor(
    private cartObservableService: CartObservableService,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.order = new OrderModel('', '', []);


    this.sub = this.cartObservableService.getProductsInCart()
      .subscribe((products: Array<CartProduct>) => {
        this.order.productList = products;
        this.totalBill = this.cartObservableService.getTotalBill(products);
      });
  }

  ngOnDestroy() {
    if (this.sub) {
        this.sub.unsubscribe();
    }

    if (this.clearSub) {
        this.clearSub.unsubscribe();
    }
  }

  onSubmitOrder() {
    const order = {...this.order};

    this.orderService.createOrder(order);
    this.router.navigate(['/products-list']);
    this.clearSub = this.cartObservableService.removeAllProduct()
      .subscribe(
        console.log,
        console.error,
        () => console.log('completed httpResult$')
      );
  }

  onCancel() {
    this.router.navigate(['/cart']);
  }

}
