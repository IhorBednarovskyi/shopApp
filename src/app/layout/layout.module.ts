import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AboutComponent, PathNotFoundComponent,
    OrderComponent, LoginComponent } from './components';

@NgModule({
  imports: [CommonModule, FormsModule],
  providers: [],
  declarations: [AboutComponent, PathNotFoundComponent, OrderComponent,
  LoginComponent],
  exports: []
})

export class LayoutModule { }
