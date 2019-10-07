import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';

import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule],
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  exports: [
    CartListComponent
  ]
})

export class CartModule { }
