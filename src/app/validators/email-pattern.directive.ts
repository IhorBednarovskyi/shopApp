import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appEmailPattern]',
  providers: [{
      provide: NG_VALIDATORS,
      useExisting: EmailPatternDirective,
      multi: true
  }]
})
export class EmailPatternDirective implements Validator {
  private re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  validate(c: AbstractControl): { [key: string]: boolean } | null {
    if ( c.value !== undefined && !this.re.test(c.value)) {
      return {
        emailPattern: true
      };
    }
    return null;
  }

}
