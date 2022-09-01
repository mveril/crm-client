import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/modeles/order';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {
  public states = Object.values(StateOrder)
  @Input() public init!: Order
  constructor(private fb: FormBuilder) { }
  form!: FormGroup;
  @Output() submitted = new EventEmitter<Order>()
  ngOnInit(): void {
    console.log(this.init);
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [this.init.typePresta],
      client: [this.init.client],
      comment: [this.init.comment],
      id: [this.init.id]
    })
  }
  onSubmit(){
    this.submitted.emit(this.form.value as Order)
  }
}
