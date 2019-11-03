import { Injectable } from '@angular/core';

import { of, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Product } from './../models/product.model';
import { ProductType } from './../models/product-type.enum';

import { LocalStorageService } from './../../core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Array<Product> = [
        new Product(1, `Car Charger for Samsung Galaxy S5`,
        `Of Imitation Leather. leaves full access to your phone's ...`,
        12.56, ProductType.InteriorAccessories, true),
        new Product(2, `Thule 933300 Easyfold XT 2-Bike Towbar Carrier`,
        `Pre-assembled, no tools required. Lock your bikes to the bike ...`,
        517.00, ProductType.ExteriorAccessories),
        new Product(3, `Snell SA2015 Approved Full Face Racing Helmet`,
        `These Snell SA2015 helmets keep comfort in mind for drivers with ...`,
        168.88, ProductType.Motorcycle, true),
        new Product(4, `22x11.00-10 with 10x7 Fusion Glossy Black Wheels for Golf Cart`,
        `Set of 4 Tire and Wheel Assemblies ** Wheel Color: Glossy Black ...`,
        379.24, ProductType.Wheels, true),
        new Product(5, `Fit Hyundai Genesis Coupe 2Dr Black Full LED Sequential
         Tail Lights Brake Lamps`,
        `Exactly the same as shown in the picture! High quality black ...`,
        419.22, ProductType.LightingAccessories, false),
        new Product(6, `Radiator Cooling Fan Motor Assembly`,
        `Radiator Cooling Fan Motor Assembly with Control Module Replacement ...`,
        159.58, ProductType.ReplacementParts, true)
    ];

  constructor(
      private localStorage: LocalStorageService
  ) {
      this.products = this.localStorage.get('products') || this.products;
    }

  getProducts$(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number | string): Observable<Product> {
    return this.getProducts$()
      .pipe(
        map((products: Array<Product>) => products.find(product => {
            return product.id === +id;
        })),
        catchError(err => throwError('Error in getProduct method'))
      );

  }

  createProduct(product: Product): void {
    product.id = +Date.now();
    this.products.push(product);
    this.localStorage.save('products', this.products);
  }

  updateProduct(product: Product): void {
    const i = this.products.findIndex(p => p.id === product.id);

    if (i > -1) {
      this.products.splice(i, 1, product);
    }
    this.localStorage.save('products', this.products);
  }

  deleteProduct(product: Product): void {
    const i = this.products.findIndex(p => p.id === product.id);

    if (i > -1) {
      this.products.splice(i, 1);
    }
    this.localStorage.save('products', this.products);
  }
}
