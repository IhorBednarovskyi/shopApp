import { ProductsActionTypes, ProductsActions } from './products.actions';
import { ProductsState, initialProductsState } from './products.state';

import { Product } from './../../../products/models/product.model';

export function productsReducer(
state = initialProductsState,
action: ProductsActions
): ProductsState {

  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS:
    case ProductsActionTypes.CREATE_PRODUCT:
    case ProductsActionTypes.UPDATE_PRODUCT:
    case ProductsActionTypes.DELETE_PRODUCT: {
      return {
        ...state,
        loading: true
      };
    }

    case ProductsActionTypes.GET_PRODUCTS_SUCCESS: {
      const data = [...action.payload];
      return {
        ...state,
        data,
        loading: false,
        loaded: true
      };
    }

    case ProductsActionTypes.CREATE_PRODUCT_SUCCESS: {
      const product = { ...action.payload as Product};
      const data = [...state.data, product];

      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }

    case ProductsActionTypes.UPDATE_PRODUCT_SUCCESS: {
      const product = {...action.payload as Product};
      const data = [...state.data];
      const index = data.findIndex(item => item.id === product.id);

      data[index] = product;

      return {
        ...state,
        data,
        loading: false,
        loaded: true
      };
    }

    case ProductsActionTypes.GET_PRODUCTS_ERROR:
    case ProductsActionTypes.UPDATE_PRODUCT_ERROR:
    case ProductsActionTypes.DELETE_PRODUCT_ERROR:
    case ProductsActionTypes.CREATE_PRODUCT_ERROR: {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }

    case ProductsActionTypes.DELETE_PRODUCT_SUCCESS: {
      const product = {...action.payload as Product};
      const data = state.data.filter(p => p.id !== product.id);
      return {
        ...state,
        data,
        loading: false,
        loaded: true
      };
    }

    case ProductsActionTypes.SELECT_PRODUCT: {
      const selectedProduct = { ...(action.payload as Product) };

      return {
        ...state,
        selectedProduct
      };
     }


    default: {
      return state;
    }
  }
}
