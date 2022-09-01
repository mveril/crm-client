import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/modeles/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  // créer la variable titleParent;
  titleParent: string = 'Liste des commandes';
  states = Object.values(StateOrder);
  collection!: Order[];
  collection$: Observable<Order[]>;
  // en-têtes du tableau de type array
  // faire passer headers au composant enfant
  public headers = [
    'Action',
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];

  constructor(private ordersService: OrdersService,private routeur: Router) {
    // ici on déclenche sumUp
    // console.log(this.ordersService.sumUp(1, 2), 'fonction sumUp');
    this.collection$ = this.ordersService.collection

    // Remplacé par PipeAsync
    //this.ordersService
    //  .collection
    //  .subscribe((data) => {
    //    this.collection = data;
    //    console.log(this.collection); // attention de ne écrire cette ligne en dehors des {}, sinon undefined
    //  });
  }

  changeState(item: Order, event : Event){
    console.log(item, event);
    const state = (event.target as HTMLSelectElement).value as StateOrder;
    console.log("nouvel êtat" , state);
    this.ordersService.changeState(item, state).subscribe((response)=>{
      Object.assign(item,response);
      console.log(item);

    })
  }

  ngOnInit(): void {}

  goToEdit(item:Order){
    this.routeur.navigate(["orders","edit",item.id.toString()])
  }
}
