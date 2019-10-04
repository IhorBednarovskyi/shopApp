import { Component, Input, Output,
  EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Product } from './../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
    @Input() product: Product;

    @Output()
    buyProduct: EventEmitter<Product> = new EventEmitter<Product>();

    onBuyProduct(): void {
        console.log(`You have bought product.`, this.product);
        this.buyProduct.emit(this.product);
    }
}
