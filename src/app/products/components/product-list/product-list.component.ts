import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from './../../models/product.model';
import { ProductsPromiseService } from './../../services';
import { CartObservableService } from './../../../cart/services';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() isAdmin: boolean;
  products: Promise<Product[]>;

  constructor(
      private productsPromiseService: ProductsPromiseService,
      private router: Router,
      private cartObservableService: CartObservableService
      ) { }

  ngOnInit() {
      this.products = this.productsPromiseService.getProducts();
  }

  onBuyProduct(product: Product): void {
      this.cartObservableService.addProductInCart(product).subscribe(
        console.log,
        console.error,
        () => console.log('completed httpResult$')
      );
  }

  onEditProduct(product: Product): void {
      const link = ['/admin/product/edit', product.id];
      this.router.navigate(link);
  }

  onDeleteProduct(product: Product): void {
      this.productsPromiseService.deleteProduct(product)
      .then(() => (this.products = this.productsPromiseService.getProducts()))
      .catch(err => console.log(err));

  }

  onGoToProductCard(product: Product): void {
      const link = ['/product', product.id];
      this.router.navigate(link);
  }

  createProduct() {
    const link = ['/admin/products/add'];
    this.router.navigate(link);
  }

}
