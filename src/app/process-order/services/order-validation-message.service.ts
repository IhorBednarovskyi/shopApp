import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { ProcessOrderServiceModule } from './../process-order-service.module';

@Injectable({
  providedIn: ProcessOrderServiceModule
})
export class OrderValidationMessageService {
  private validationMessagesMap = {
      firstName: {
        required: 'Please enter your first name.'
      },
      email: {
        required: 'Please enter your email address.',
        emailPattern: 'Please enter a valid email address.'
      }
    };

  setValidationMessage(c: AbstractControl, controlName: string): string {
    if ((c.touched || c.dirty) && c.errors) {
      return Object.keys(c.errors)
        .map(key => this.validationMessagesMap[controlName][key])
        .join(' ');
    }
  }
}
