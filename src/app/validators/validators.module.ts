import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailPatternDirective } from './email-pattern.directive';



@NgModule({
  declarations: [EmailPatternDirective],
  imports: [
    CommonModule
  ],
  exports: [EmailPatternDirective]
})
export class ValidatorsModule { }
