import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/modeles/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {

  // décorateur @Input()
  // @Input() collection!: Order[]; // undefined
  @Input() headers!: string[];

  constructor() {
    //console.log(this.collection, 'tableau'); // undefined
  }

  ngOnInit(): void {
    console.log(this.headers, 'headers');
  }

  // hook qui se déclenche à chaque nouvelle modification du composant
  ngOnChanges(){
    //console.log(this.collection, 'ngOnChanges');
  }

}
