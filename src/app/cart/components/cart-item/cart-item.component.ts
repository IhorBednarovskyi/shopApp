import { Component, Input, Output,
    EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Product } from './../../../products/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
    @Input() product: Product;

    @Output() productAmountChange: EventEmitter<Product> = new EventEmitter<Product>();
    @Output() removeProduct: EventEmitter<string> = new EventEmitter<string>();

    changeHandler(): void {
        this.productAmountChange.emit(this.product);
    }

    removeHandler(): void {
        this.removeProduct.emit(this.product.name);
    }
}
