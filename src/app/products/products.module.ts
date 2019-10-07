import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    ProductListComponent,
    ProductComponent,
  ],
  exports: [
    ProductListComponent
  ]
})

export class ProductsModule { }
