import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CartState } from './cart.state';
import { CartProduct } from './../../../cart/models/cart-product.model';
import { getRouterState } from './../router/router.selectors';

const getEntities = (state: CartState) => state.entities;
const getLoaded = (state: CartState) => state.loaded;
const getLoading = (state: CartState) => state.loading;
const getError = (state: CartState) => state.error;

export const getCartState = createFeatureSelector<CartState>('cart');

const getCartEntitites = createSelector(getCartState, getEntities);
export const getCartLoaded = createSelector(getCartState, getLoaded);
export const getCartLoading = createSelector(getCartState, getLoading);
export const getCartError = createSelector(getCartState, getError);

/**
 * transform object to array
 */
export const getCartProducts = createSelector(getCartEntitites, entities => {
    return Object.keys(entities).map(id => entities[+id]);
});
