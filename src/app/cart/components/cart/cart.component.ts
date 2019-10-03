import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


import { CommunicationService } from './../../../shared/services/communication.service';
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
    this.sub = this.communicationService.channel1$.subscribe((data: Product) => {
        this.productsList = this.cartService.putProductInCart(data);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
