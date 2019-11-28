import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as RouterActions from './../router/router.actions';

import { Observable } from 'rxjs';
import { switchMap, pluck, concatMap, map } from 'rxjs/operators';

import * as ProductsActions from './products.actions';

import { Product } from '../../../products/models/product.model';

import { ProductsPromiseService } from './../../../products/services';

@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private productsPromiseService: ProductsPromiseService
  ) {}

  @Effect()
  getProducts$: Observable<Action> = this.actions$.pipe(
    ofType(ProductsActions.ProductsActionTypes.GET_PRODUCTS),
    switchMap((action: ProductsActions.GetProducts) =>
      this.productsPromiseService
        .getProducts()
        .then(products => new ProductsActions.GetProductsSuccess(products))
        .catch(err => new ProductsActions.GetProductsError(err))
    )
  );

  @Effect()
  updateProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.UpdateProduct>(ProductsActions.ProductsActionTypes.UPDATE_PRODUCT),
    pluck('payload'),
    concatMap((payload: Product) =>
      this.productsPromiseService
        .updateProduct(payload)
        .then(product => new ProductsActions.UpdateProductSuccess(product))
        .catch(err => new ProductsActions.UpdateProductError(err))
    )
  );

  @Effect()
  createProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.CreateProduct>(ProductsActions.ProductsActionTypes.CREATE_PRODUCT),
    pluck('payload'),
    concatMap((payload: Product) =>
      this.productsPromiseService
        .createProduct(payload)
        .then(product => new ProductsActions.CreateProductSuccess(product))
        .catch(err => new ProductsActions.CreateProductError(err))
    )
  );

  @Effect()
  deleteProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.DeleteProduct>(ProductsActions.ProductsActionTypes.DELETE_PRODUCT),
    pluck('payload'),
    concatMap((payload: Product) =>
      this.productsPromiseService
        .deleteProduct(payload)
        .then(() => new ProductsActions.DeleteProductSuccess(payload))
        .catch(err => new ProductsActions.CreateProductError(err))
    )
  );

  @Effect()
  createUpdateProductSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.CreateProduct | ProductsActions.UpdateProduct>(
      ProductsActions.ProductsActionTypes.CREATE_PRODUCT_SUCCESS,
      ProductsActions.ProductsActionTypes.UPDATE_PRODUCT_SUCCESS
    ),
    map(
      action =>
        new RouterActions.Go({
          path: ['/admin']
        })
    )
  );

}
