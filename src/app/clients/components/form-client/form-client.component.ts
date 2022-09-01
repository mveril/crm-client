import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/core/modeles/client';
import { StateClient } from 'src/app/core/enums/state-client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  public states = Object.values(StateClient)
  @Input() public init!: Client
  constructor(private fb: FormBuilder) { }
  form!: FormGroup;
  @Output() submitted = new EventEmitter<Client>()
  ngOnInit(): void {
    console.log(this.init);
    this.form = this.fb.group({
      name: [this.init.name],
      totalCaHt: [this.init.totalCaHt],
      tva: [this.init.tva],
      state: [this.init.state],
      comment: [this.init.comment],
      id: [this.init.id]
    })
  }
  onSubmit(){
    this.submitted.emit(this.form.value as Client)
  }
}
