import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { pluck  } from 'rxjs/operators';

import { Product } from './../../models/product.model';
import { ProductType } from './../../models/product-type.enum';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
    product: Product;
    originalProduct: Product;
    categories = ProductType;

    constructor(
        private productsService: ProductsService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
      this.route.data.pipe(pluck('product')).subscribe((product: Product) => {
          this.product = { ...product };
          this.originalProduct = { ...product };
      });
    }

    onSaveProduct() {
        const product = { ...this.product } as Product;

        if (product.id) {
            this.productsService.updateProduct(product);
        } else {
            this.productsService.createProduct(product);
        }

        this.onReturn();
    }

    onReturn(): void {
        this.router.navigate(['/products-list']);
    }

    changeCategory(value: ProductType) {
        this.product.category = value;
    }

}
