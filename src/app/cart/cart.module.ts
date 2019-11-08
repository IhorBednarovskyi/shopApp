import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';

import { CartRoutingModule } from './cart-routing.module';

import { CartAPIProvider } from './cart.config';

import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, CartRoutingModule],
  declarations: [
    CartRoutingModule.components,
    CartItemComponent
  ],
  providers: [
    CartAPIProvider
  ]
})

export class CartModule { }
