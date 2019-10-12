import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemHoverDirective } from './directives/item-hover.directive';
import { ClickFontChangeDirective } from './directives/click-font-change.directive';

const directives = [ItemHoverDirective, ClickFontChangeDirective];

@NgModule({
  imports: [CommonModule],
  providers: [],
  declarations: [...directives],
  exports: [...directives]
})

export class SharedModule { }
