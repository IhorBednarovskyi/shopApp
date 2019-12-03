import { Component, OnInit, Output, EventEmitter, OnDestroy  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';

import { OrderModel } from './../../../layout/components/order/models/order.model';

import { OrderValidationMessageService } from './../../services/order-validation-message.service';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit, OnDestroy {
  @Output() submitOrder: EventEmitter<OrderModel> = new EventEmitter<OrderModel>();
  @Output() goBack: EventEmitter<void> = new EventEmitter<void>();

  order: OrderModel = new OrderModel();
  orderForm: FormGroup;
  emailValidationMessage = '';
  firstNameValidationMessage = '';

  get phones(): FormArray {
    return this.orderForm.get('phones') as FormArray;
  }

  private sub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private validationMessageService: OrderValidationMessageService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSave() {
    this.submitOrder.emit(this.orderForm.getRawValue());
  }

  onBlurEmail() {
    const emailControl = this.orderForm.get('email');
    this.emailValidationMessage =
        this.validationMessageService.setValidationMessage(emailControl, 'email');
  }

  onBlurFirstName() {
    const firstNameControl = this.orderForm.get('firstName');
    this.firstNameValidationMessage =
        this.validationMessageService.setValidationMessage(firstNameControl, 'firstName');
  }

  onAddPhone(): void {
    this.phones.push(this.buildPhone());
  }

  onRemovePhone(index: number): void {
    this.phones.removeAt(index);
  }

  onCancel(): void {
    this.goBack.emit();
  }

  private buildForm() {
    this.orderForm = this.formBuilder.group({
      firstName: this.formBuilder.control('', { validators: [Validators.required], updateOn: 'blur'}),
      lastName: '',
      email: [
        '',
        [Validators.required]
      ],
      phones: this.formBuilder.array([this.buildPhone()]),
      pickup: false,
      address: ''
    });
  }

  private buildPhone(): FormGroup {
    return this.formBuilder.group({
      phone: null
    });
  }
}
