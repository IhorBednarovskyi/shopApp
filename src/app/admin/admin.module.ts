import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsModule } from './../products/products.module';
import { AdminRoutingModule } from './admin-routing.module';
import { OrderItemComponent } from './components/order-item/order-item.component';


@NgModule({
  declarations: [AdminRoutingModule.components, OrderItemComponent],
  imports: [
    CommonModule,
    ProductsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
