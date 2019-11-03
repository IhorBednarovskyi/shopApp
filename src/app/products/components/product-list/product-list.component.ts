import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from './../../models/product.model';
import { ProductsService } from './../../services/products.service';
import { CartService } from './../../../cart/services/cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() isAdmin: boolean;
  products$: Observable<Product[]>;

  constructor(
      private productsService: ProductsService,
      private router: Router,
      private cartService: CartService
      ) { }

  ngOnInit() {
      this.products$ = this.productsService.getProducts$();
  }

  onBuyProduct(product: Product): void {
      this.cartService.addProductInCart(product);
  }

  onEditProduct(product: Product): void {
      const link = ['/admin/product/edit', product.id];
      this.router.navigate(link);
  }

  onDeleteProduct(product: Product): void {
      this.productsService.deleteProduct(product);
  }

  onGoToProductCard(product: Product): void {
      const link = ['/product', product.id];
      this.router.navigate(link);
  }

  createProduct() {
    const link = ['/admin/product/edit'];
    this.router.navigate(link);
  }

}
