import { Pipe, PipeTransform } from '@angular/core';

import { CartProduct } from './../../cart/models/cart-product.model';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
    transform(products: Array<CartProduct>, field: string, sortOpt: boolean = true): any {
        if (field) {
            return products.sort((a: CartProduct, b: CartProduct) => {
                if (field in a && field in b) {
                    const aValue = a[field].toLowerCase ? a[field].toLowerCase() : a[field];
                    const bValue = b[field].toLowerCase ? b[field].toLowerCase() : b[field];
                    return (bValue > aValue ? (sortOpt ? 1 : -1) :
                        bValue < aValue ? (sortOpt ? -1 : 1) : 0);
                }
                return 0;
            });
        }
        return products;
    }
}
