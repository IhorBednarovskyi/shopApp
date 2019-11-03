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
    @Input() isAdmin: boolean;

    @Output()
    buyProduct: EventEmitter<Product> = new EventEmitter<Product>();
    @Output()
    goToProductCard: EventEmitter<Product> = new EventEmitter<Product>();
    @Output()
    deleteProduct: EventEmitter<Product> = new EventEmitter<Product>();
    @Output()
    editProduct: EventEmitter<Product> = new EventEmitter<Product>();

    onBuyProduct(): void {
        console.log(`You have bought product.`, this.product);
        this.buyProduct.emit(this.product);
    }

    onProductCard(): void {
        this.goToProductCard.emit(this.product);
    }

    onDeleteProduct(): void {
        this.deleteProduct.emit(this.product);
    }

    onEditProduct(): void {
        this.editProduct.emit(this.product);
    }
}
