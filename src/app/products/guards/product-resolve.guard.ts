import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

// NgRx
import { Store, select } from '@ngrx/store';
import { AppState, getProductByUrl } from './../../core/@ngrx';
import * as ProductsActions from './../../core/@ngrx/products/products.actions';
import * as RouterActions from './../../core/@ngrx/router/router.actions';

// rxjs
import { Observable, of, from } from 'rxjs';
import { map, catchError, take, tap, delay } from 'rxjs/operators';

import { Product } from './../models/product.model';
import { ProductsPromiseService } from './../services';
import { ProductsServicesModule } from '../products-services.module';

@Injectable({
  providedIn: ProductsServicesModule
})
export class ProductResolveGuard implements Resolve<Product> {
  constructor(
    private productsPromiseService: ProductsPromiseService,
    private store: Store<AppState>
  ) {}

  resolve(): Observable<Product> | null {
    return this.store.pipe(
      select(getProductByUrl),
      tap(product => this.store.dispatch(new ProductsActions.SelectProduct(product))),
      delay(2000),
      map(product => {
        if (product) {
          return product;
        } else {
          this.store.dispatch(new RouterActions.Go({ path: ['/products-list']}));
          return null;
        }
      }),
      take(1),
      catchError(() => {
        this.store.dispatch(new RouterActions.Go({ path: ['/products-list']}));
        // catchError MUST return observable
        return of(null);
      })
    );
  }
}
