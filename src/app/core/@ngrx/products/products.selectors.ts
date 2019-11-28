import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getRouterState } from './../router';
import { Product } from './../../../products/models/product.model';

import { ProductsState } from './products.state';

export const getProductsState = createFeatureSelector<ProductsState>('products');
export const getProductsData = createSelector(getProductsState, (state: ProductsState) => state.data);
export const getProductsError = createSelector(getProductsState, (state: ProductsState) => state.error);
export const getProductsLoaded = createSelector(getProductsState, (state: ProductsState) => state.loaded);
export const getSelectedProduct = createSelector(getProductsState, (state: ProductsState) => state.selectedProduct);




export const getProductByUrl = createSelector(
    getProductsData,
    getRouterState,
    (products, router): Product => {
        const productID = router.state.params.productID;
        if (productID) {
            return products.find(product => product.id === +productID);
        } else {
            return new Product(+Date.now(), '', '', 0);
        }
});
