import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ValidatorsModule } from './../validators/validators.module';
import { ProcessOrderServiceModule } from './../process-order/process-order-service.module';


import { AboutComponent, PathNotFoundComponent,
    OrderComponent, LoginComponent } from './components';

import { ProcessOrderComponent } from './../process-order/component/process-order/process-order.component';


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ValidatorsModule, ProcessOrderServiceModule],
  providers: [],
  declarations: [AboutComponent, PathNotFoundComponent, OrderComponent,
  LoginComponent, ProcessOrderComponent],
  exports: []
})

export class LayoutModule { }
