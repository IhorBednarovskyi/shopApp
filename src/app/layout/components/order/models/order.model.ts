import { CartProduct } from './../../../../cart/models/cart-product.model';

export class OrderModel {
    constructor(
        public firstName: string,
        public lastName: string,
        public productList: CartProduct[],
        public id?: number
    ) {
        this.id = id || +Date.now();
    }
}
