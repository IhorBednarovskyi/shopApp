import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './components/cart/cart.component';

import { CartService } from './services/cart.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CartComponent
  ],
  providers: [CartService],
  exports: [
    CartComponent
  ]
})

export class CartModule { }
