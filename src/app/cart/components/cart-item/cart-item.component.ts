import { Component, Input, Output,
    EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { CartProduct } from './../../models/cart-product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
    @Input() product: CartProduct;

    @Output() productAmountChange: EventEmitter<CartProduct> = new EventEmitter<CartProduct>();
    @Output() removeProduct: EventEmitter<string> = new EventEmitter<string>();

    changeHandler(): void {
        this.productAmountChange.emit();
    }

    removeHandler(): void {
        this.removeProduct.emit(this.product.getName());
    }
}
