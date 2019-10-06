import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemHoverDirective } from './directives/item-hover.directive';
import { ClickFontChangeDirective } from './directives/click-font-change.directive';

@NgModule({
  imports: [CommonModule],
  providers: [],
  declarations: [ItemHoverDirective,
      ClickFontChangeDirective],
  exports: [ItemHoverDirective,
      ClickFontChangeDirective]
})

export class SharedModule { }
