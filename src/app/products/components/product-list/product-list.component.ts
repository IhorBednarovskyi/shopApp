import { Component, OnInit } from '@angular/core';

import { Product } from './../../models/product.model';
import { ProductsService } from './../../services/products.service';
import { CommunicationService } from './../../../core/services/communication.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(private productsService: ProductsService, private communicationService: CommunicationService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuyProduct(product: Product): void {
    this.communicationService.publichData(product);
  }

}
