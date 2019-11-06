import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { pluck  } from 'rxjs/operators';

import { Product } from './../../models/product.model';
import { ProductType } from './../../models/product-type.enum';
import { ProductsPromiseService } from './../../services';

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
        private productsPromiseService: ProductsPromiseService,
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
      const method = product.id ? 'updateProduct' : 'createProduct';

      this.productsPromiseService[method](product)
        .then(() => this.onReturn())
        .catch(err => console.log(err));
    }

    onReturn(): void {
        this.router.navigate(['/admin']);
    }

    changeCategory(value: ProductType) {
        this.product.category = value;
    }

}
