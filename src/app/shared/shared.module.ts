import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemHoverDirective } from './directives/item-hover.directive';
import { ClickFontChangeDirective } from './directives/click-font-change.directive';

import { OrderByPipe } from './pipes/order-by.pipe';

const directives = [ItemHoverDirective, ClickFontChangeDirective];

@NgModule({
  imports: [CommonModule],
  providers: [],
  declarations: [...directives, OrderByPipe],
  exports: [...directives, OrderByPipe]
})

export class SharedModule { }
