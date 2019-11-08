import { Component, Input, Output, OnInit,
    EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { CartProduct } from './../../models/cart-product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
    private originalProduct: CartProduct;
    @Input() product: CartProduct;

    @Output() saveChanges: EventEmitter<CartProduct> = new EventEmitter<CartProduct>();
    @Output() removeProduct: EventEmitter<number> = new EventEmitter<number>();

    ngOnInit() {
      this.originalProduct = { ...this.product };
    }

    saveHandler(): void {
        this.originalProduct = { ...this.product };
        this.saveChanges.emit(this.product);
    }

    removeHandler(): void {
        this.removeProduct.emit(+this.product.id);
    }
}
