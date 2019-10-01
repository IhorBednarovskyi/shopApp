import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


import { CommunicationService } from './../../../core/services/communication.service';
import { CartService } from './../../services/cart.service';
import { Product } from './../../../products/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  public productsList: Array<Product>;

  constructor(private communicationService: CommunicationService, private cartService: CartService) {}

  ngOnInit() {
    // немного запутано как для простого приложения.
    // может быть не использовать коммуникатор сервис, а в сервисе для корзины
    // предусмотреть метод добавления товара и вызвать его в ProductListComponent
    // На ваше усмотрение.
    this.sub = this.communicationService.channel1$.subscribe((data: Product) => {
        this.productsList = this.cartService.putProductInCart(data);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
