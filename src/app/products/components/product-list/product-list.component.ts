import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './../../models/product.model';

import * as RouterActions from './../../../core/@ngrx/router/router.actions';

import { Store, select } from '@ngrx/store';
import { AppState, getProductsData, getProductsError } from './../../../core/@ngrx';
import * as ProductsActions from './../../../core/@ngrx';

import * as CartActions from './../../../core/@ngrx/cart/cart.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() isAdmin: boolean;

  products$: Observable<ReadonlyArray<Product>>;
  productsError$: Observable<Error | string>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
      this.products$ = this.store.pipe(select(getProductsData));
      this.productsError$ = this.store.pipe(select(getProductsError));
  }

  onBuyProduct(product: Product): void {
      this.store.dispatch(new CartActions.AddCartProduct(product));
  }

  onEditProduct(product: Product): void {
      const link = ['/admin/product/edit', product.id];
      this.store.dispatch(new RouterActions.Go({ path: link }));
  }

  onDeleteProduct(product: Product): void {
      this.store.dispatch(new ProductsActions.DeleteProduct(product));

  }

  onGoToProductCard(product: Product): void {
      const link = ['/product', product.id];
      this.store.dispatch(new RouterActions.Go({ path: link }));
  }

  createProduct() {
      const link = ['/admin/products/add'];
      this.store.dispatch(new RouterActions.Go({ path: link }));
  }

}
