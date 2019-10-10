import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemHoverDirective } from './directives/item-hover.directive';
import { ClickFontChangeDirective } from './directives/click-font-change.directive';

// Так код меньше дублируется
const directives = [ItemHoverDirective, ClickFontChangeDirective];

@NgModule({
  imports: [CommonModule],
  // providers: [], // провайдеров не бывает в таких модулях
  declarations: [...directives],
  exports: [...directives]
})
export class SharedModule {}
