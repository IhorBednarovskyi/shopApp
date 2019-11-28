import { CartProduct } from './../../../cart/models/cart-product.model';

export interface CartState {
  entities: Readonly<{ [id: number]: CartProduct }>;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const initialCartState: CartState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null
};
