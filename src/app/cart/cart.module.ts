import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartListComponent } from './components/cart-list/cart-list.component';

import { CartService } from './services/cart.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  providers: [CartService],
  exports: [
    CartListComponent
  ]
})

export class CartModule { }
