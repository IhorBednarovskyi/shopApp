import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from './../../../core/@ngrx';

import * as RouterActions from './../../../core/@ngrx/router/router.actions';

import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Product } from './../../models/product.model';
import { ProductType } from './../../models/product-type.enum';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit, OnDestroy {
    product: Product;
    categories = ProductType;

    private sub: Subscription;

    constructor(
        private productsService: ProductsService,
        private store: Store<AppState>,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.product = new Product(+Date.now(), '', '', 0);

        const id = +this.route.snapshot.paramMap.get('productID');
        const observer = {
            next: (product: Product) => {
                this.product = { ...product };
            },
            error: (err: any) => console.log(err)
        };
        this.sub = this.productsService.getProduct(id).subscribe(observer);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onReturn(): void {
        this.store.dispatch(new RouterActions.Go({ path: ['/products-list']}));
    }

}
