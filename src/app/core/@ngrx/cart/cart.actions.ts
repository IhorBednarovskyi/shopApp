import { Action } from '@ngrx/store';

import { CartProduct } from './../../../cart/models/cart-product.model';
import { Product } from './../../../products/models/product.model';

export enum CartActionTypes {
  // Пишите более точно в квадратных скобках источник дейстия
  GET_PRODUCTS                = '[Cart] GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS        = '[Cart] GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR          = '[Cart] GET_PRODUCTS_ERROR',
  ADD_PRODUCT                 = '[Cart] ADD_PRODUCT',
  ADD_PRODUCT_SUCCESS         = '[Cart] ADD_PRODUCT_SUCCESS',
  ADD_PRODUCT_ERROR           = '[Cart] ADD_PRODUCT_ERROR',
  UPDATE_PRODUCT              = '[Cart] UPDATE_PRODUCT',
  UPDATE_PRODUCT_SUCCESS      = '[Cart] UPDATE_PRODUCT_SUCCESS',
  UPDATE_PRODUCT_ERROR        = '[Cart] UPDATE_PRODUCT_ERROR',
  DELETE_PRODUCT              = '[Cart] DELETE_PRODUCT',
  DELETE_PRODUCT_SUCCESS      = '[Cart] DELETE_PRODUCT_SUCCESS',
  DELETE_PRODUCT_ERROR        = '[Cart] DELETE_PRODUCT_ERROR',
  DELETE_ALL_PRODUCTS         = '[Cart] DELETE_ALL_PRODUCTS',
  DELETE_ALL_PRODUCTS_SUCCESS = '[Cart] DELETE_ALL_PRODUCTS_SUCCESS',
  DELETE_ALL_PRODUCTS_ERROR   = '[Cart] DELETE_ALL_PRODUCTS_ERROR'
}

export class GetCartProducts implements Action {
  readonly type = CartActionTypes.GET_PRODUCTS;
}

export class GetCartProductsSuccess implements Action {
  readonly type = CartActionTypes.GET_PRODUCTS_SUCCESS;
  constructor(public payload: CartProduct[]) {}
}

export class GetCartProductsError implements Action {
  readonly type = CartActionTypes.GET_PRODUCTS_ERROR;
  constructor(public payload: Error | string) {}
}

export class AddCartProduct implements Action {
  readonly type = CartActionTypes.ADD_PRODUCT;
  constructor(public payload: Product) {}
}

export class AddCartProductSuccess implements Action {
  readonly type = CartActionTypes.ADD_PRODUCT_SUCCESS;
  constructor(public payload: CartProduct) {}
}

export class AddCartProductError implements Action {
  readonly type = CartActionTypes.ADD_PRODUCT_ERROR;
  constructor(public payload: Error | string) {}
}

export class UpdateCartProduct implements Action {
  readonly type = CartActionTypes.UPDATE_PRODUCT;
  constructor(public payload: CartProduct) {}
}

export class UpdateCartProductSuccess implements Action {
  readonly type = CartActionTypes.UPDATE_PRODUCT_SUCCESS;
  constructor(public payload: CartProduct) {}
}

export class UpdateCartProductError implements Action {
  readonly type = CartActionTypes.UPDATE_PRODUCT_ERROR;
  constructor(public payload: Error | string) {}
}

export class DeleteCartProduct implements Action {
  readonly type = CartActionTypes.DELETE_PRODUCT;
  constructor(public payload: number) {}
}

export class DeleteCartProductSuccess implements Action {
  readonly type = CartActionTypes.DELETE_PRODUCT_SUCCESS;
  constructor(public payload: number) {}
}

export class DeleteCartProductError implements Action {
  readonly type = CartActionTypes.DELETE_PRODUCT_ERROR;
  constructor(public payload: Error | string) {}
}

export class DeleteAllCartProducts implements Action {
  readonly type = CartActionTypes.DELETE_ALL_PRODUCTS;
}

export class DeleteAllCartProductsSuccess implements Action {
  readonly type = CartActionTypes.DELETE_ALL_PRODUCTS_SUCCESS;
}

export class DeleteAllCartProductsError implements Action {
  readonly type = CartActionTypes.DELETE_ALL_PRODUCTS_ERROR;
  constructor(public payload: Error | string) {}
}


export type CartActions
  = GetCartProducts
  | GetCartProductsSuccess
  | GetCartProductsError
  | AddCartProduct
  | AddCartProductSuccess
  | AddCartProductError
  | UpdateCartProduct
  | UpdateCartProductSuccess
  | UpdateCartProductError
  | DeleteAllCartProducts
  | DeleteAllCartProductsSuccess
  | DeleteAllCartProductsError
  | DeleteCartProduct
  | DeleteCartProductSuccess
  | DeleteCartProductError;
