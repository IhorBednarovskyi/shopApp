import { CartProduct } from './../../../../cart/models/cart-product.model';

export class OrderModel {
    constructor(
        public firstName: string = '',
        public lastName: string = '',
        public email = '',
        public phone = null,
        public pickup = false,
        public address = [''],
        public productList: CartProduct[] = [],
        public id = +Date.now()
    ) { }
}
