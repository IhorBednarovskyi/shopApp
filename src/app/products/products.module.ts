import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from './../shared/shared.module';
import { ProductsServicesModule } from './products-services.module';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductComponent } from './components';

import { productsReducer, ProductsEffects } from './../core/@ngrx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    StoreModule.forFeature('products', productsReducer),
    ProductsServicesModule,
    ProductsRoutingModule,
    EffectsModule.forFeature([ProductsEffects])
  ],
  declarations: [
    ProductsRoutingModule.components,
    ProductComponent,
  ],
  exports: [ProductsRoutingModule.components]
})

export class ProductsModule { }
