import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, getProductByUrl  } from './../../../core/@ngrx';

import * as ProductsActions from './../../../core/@ngrx/products/products.actions';
import * as RouterActions from './../../../core/@ngrx/router/router.actions';

import { Subscription } from 'rxjs';

import { Product } from './../../models/product.model';
import { ProductType } from './../../models/product-type.enum';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy {
    product: Product;
    originalProduct: Product;
    categories = ProductType;

    private sub: Subscription;

    constructor(
        private store: Store<AppState>
    ) { }

    ngOnInit(): void {
      this.sub = this.store
      .pipe(select(getProductByUrl))
      .subscribe(product => this.product = product);
    }

    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }

    onSaveProduct() {
      const product = { ...this.product } as Product;

      if (product.id) {
        this.store.dispatch(new ProductsActions.UpdateProduct(product));
      } else {
        this.store.dispatch(new ProductsActions.CreateProduct(product));
      }

    }

    onReturn(): void {
      this.store.dispatch(new RouterActions.Go({ path: ['/admin'] }));
    }

    changeCategory(value: ProductType) {
        this.product.category = value;
    }

}
