import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemHoverDirective } from './directives/item-hover.directive';

@NgModule({
  imports: [CommonModule],
  providers: [],
  declarations: [ItemHoverDirective],
  exports: [ItemHoverDirective]
})

export class SharedModule { }
