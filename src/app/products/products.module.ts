import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';

import { ProductComponent } from './components';

import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsRoutingModule.components,
    ProductComponent,
  ],
  exports: [ProductsRoutingModule.components]
})

export class ProductsModule { }
