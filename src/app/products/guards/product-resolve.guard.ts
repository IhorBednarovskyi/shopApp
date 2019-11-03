import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

// rxjs
import { Observable, of } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';

import { Product } from './../models/product.model';
import { ProductsService } from './../services/products.service';
import { ProductsModule } from './../products.module';

@Injectable({
  providedIn: ProductsModule
})
export class ProductResolveGuard implements Resolve<Product> {
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Product | null> {

    if (!route.paramMap.has('productID')) {
      return of(new Product(null, '', '', 0));
    }

    const id = +route.paramMap.get('productID');

    return this.productsService.getProduct(id).pipe(
      map((product: Product) => {
        if (product) {
          return product;
        } else {
          this.router.navigate(['/products-list']);
          return null;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/products-list']);
        return of(null);
      })
    );
  }
}
