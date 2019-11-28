import { Action, createReducer, on } from '@ngrx/store';

import { CartActionTypes, CartActions  } from './cart.actions';
import { initialCartState, CartState } from './cart.state';

import { CartProduct } from './../../../cart/models/cart-product.model';

export function cartReducer(
    state = initialCartState,
    action: CartActions
): CartState {

    switch (action.type) {

      case CartActionTypes.GET_PRODUCTS:
      case CartActionTypes.UPDATE_PRODUCT:
      case CartActionTypes.DELETE_PRODUCT: {
        return {
          ...state,
          loading: true
        };
      }

      case CartActionTypes.GET_PRODUCTS_SUCCESS: {
        const products = action.payload as CartProduct[];

        const entities = products.reduce(
            (result: {[id: number]: CartProduct}, product: CartProduct) => {
                return {
                    ...result,
                    [product.id]: product
                };
            },
            {
                ...state.entities
            }
        );

        return {
          ...state,
          loading: false,
          loaded: true,
          entities
        };
      }

      case CartActionTypes.ADD_PRODUCT_SUCCESS:
      case CartActionTypes.UPDATE_PRODUCT_SUCCESS: {
        const product = action.payload as CartProduct;

        const entities = {
          ...state.entities,
          [product.id]: product
        };

        return {
          ...state,
          loading: false,
          loaded: true,
          entities
        };
      }

      case CartActionTypes.DELETE_ALL_PRODUCTS_SUCCESS: {
        const entities = {};

        return {
          ...state,
          entities
        };
      }

      case CartActionTypes.GET_PRODUCTS_ERROR:
      case CartActionTypes.ADD_PRODUCT_ERROR:
      case CartActionTypes.UPDATE_PRODUCT_ERROR:
      case CartActionTypes.DELETE_PRODUCT_ERROR:
      case CartActionTypes.DELETE_ALL_PRODUCTS_ERROR: {
        const error = action.payload;

        return {
          ...state,
          loading: false,
          loaded: false,
          error
        };
      }

      default: {
        return state;
      }
    }
  }
