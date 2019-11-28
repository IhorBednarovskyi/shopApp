import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as CartActions from './cart.actions';

import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, concatMap, pluck } from 'rxjs/operators';

import { CartObservableService } from './../../../cart/services';
import { CartProduct } from './../../../cart/models/cart-product.model';
import { Product } from './../../../products/models/product.model';

@Injectable()
export class CartEffects {

  constructor(
    private actions$: Actions,
    private cartObservableService: CartObservableService
    ) {}

  @Effect()
  getCartProducts$: Observable<Action> = this.actions$.pipe(
    ofType<CartActions.GetCartProducts>(CartActions.CartActionTypes.GET_PRODUCTS),
    switchMap(action =>
      this.cartObservableService
        .getProductsInCart()
        .pipe(
          map(products => new CartActions.GetCartProductsSuccess(products)),
          catchError(err => of(new CartActions.GetCartProductsError(err)))
        )
    )
  );

  @Effect()
  addProduct$: Observable<Action> = this.actions$.pipe(
    ofType<CartActions.AddCartProduct>(CartActions.CartActionTypes.ADD_PRODUCT),
    pluck('payload'),
    concatMap((payload: Product) =>
      this.cartObservableService.addProductInCart(payload)
        .pipe(
          map(product => {
            return new CartActions.AddCartProductSuccess(product);
          }),
          catchError(err => of(new CartActions.AddCartProductError(err)))
        )
    )
  );

  @Effect()
  updateProduct$: Observable<Action> = this.actions$.pipe(
    ofType<CartActions.UpdateCartProduct>(CartActions.CartActionTypes.UPDATE_PRODUCT),
    pluck('payload'),
    concatMap((payload: CartProduct ) =>
      this.cartObservableService.updateProduct(payload).pipe(
        map(product => {
          return new CartActions.UpdateCartProductSuccess(product);
        }),
        catchError(err => of(new CartActions.UpdateCartProductSuccess(err)))
      )
    )
  );

  @Effect()
  deleteProduct$: Observable<Action> = this.actions$.pipe(
    ofType<CartActions.DeleteCartProduct>(CartActions.CartActionTypes.DELETE_PRODUCT),
    pluck('payload'),
    concatMap((payload: number) =>
      this.cartObservableService.removeProduct(payload).pipe(
        map(() => new CartActions.DeleteCartProductSuccess(payload)),
        catchError(err => of(new CartActions.DeleteCartProductError(err)))
      )
    )
  );

  @Effect()
  deleteAllProduct$: Observable<Action> = this.actions$.pipe(
    ofType<CartActions.DeleteAllCartProducts>(CartActions.CartActionTypes.DELETE_ALL_PRODUCTS),
    switchMap(action =>
      this.cartObservableService.removeAllProduct().pipe(
        map(() => new CartActions.DeleteAllCartProductsSuccess()),
        catchError(err => of(new CartActions.DeleteAllCartProductsError(err)))
      )
    )
  );
}
