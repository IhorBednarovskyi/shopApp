import { Component, OnInit } from '@angular/core';

import { Product } from './../../models/product.model';
import { ProductsService } from './../../services/products.service';
import { CartService } from './../../../cart/services/cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuyProduct(product: Product): void {
    // лучше передавать объект, а из него брать то, что надо.
    // Один параметр всегда лучше, на мой взгляд
    this.cartService.addProductInCart(product.name, product.price);
  }

}
