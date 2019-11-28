import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from './../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';

import { CartAPIProvider } from './cart.config';

import { CartItemComponent } from './components/cart-item/cart-item.component';

import { CartEffects, cartReducer } from './../core/@ngrx';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, CartRoutingModule,
  StoreModule.forFeature('cart', cartReducer),
  EffectsModule.forFeature([CartEffects])],

  declarations: [
    CartItemComponent,
    CartRoutingModule.components
  ],
  providers: [
    CartAPIProvider
  ]
})

export class CartModule { }
