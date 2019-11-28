import { select } from '@ngrx/store';
import { getProductsLoaded } from './../../core/@ngrx';
import * as ProductsActions from './../../core/@ngrx/products/products.actions';

import { Observable } from 'rxjs';
import { tap, filter, take } from 'rxjs/operators';

export function checkStore(store): Observable<boolean> {
  return store.pipe(
    select(getProductsLoaded),
    tap((loaded: boolean) => {
      if (!loaded) {
        store.dispatch(new ProductsActions.GetProducts());
      }
    }),
    filter((loaded: boolean) => loaded),
    take(1)
  );
}
