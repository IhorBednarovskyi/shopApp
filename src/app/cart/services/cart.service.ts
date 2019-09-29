import { Injectable } from '@angular/core';

import { Product } from './../../products/models/product.model';

@Injectable()
export class CartService {
  private boughtProductsList: Array<Product> = [];

  putProductInCart(product: Product): Array<Product> {
      this.boughtProductsList.push(product);
      return this.boughtProductsList;
  }
}
