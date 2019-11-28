import { Product } from './../../../products/models/product.model';
import { ProductType } from './../../../products/models/product-type.enum';

export interface ProductsState {
  data: ReadonlyArray<Product>;
  selectedProduct: Product;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const initialProductsState: ProductsState = {
    data: [],
    selectedProduct: null,
    loading: false,
    loaded: false,
    error: null
};

