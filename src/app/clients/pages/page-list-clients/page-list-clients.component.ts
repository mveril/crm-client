import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/modeles/client';
import { ClientsService } from 'src/app/clients/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  titleParent: string = 'Liste des clients';
  states = Object.values(StateClient);
  collection!: Client[];
  collection$: Observable<Client[]>;
  // en-têtes du tableau de type array
  // faire passer headers au composant enfant
  public headers = [
    'Action',
    'Nom',
    'totalCaHt',
    'comment',
    'state'
  ];

  constructor(private clientsService: ClientsService) {
    // ici on déclenche sumUp
    // console.log(this.clientsService.sumUp(1, 2), 'fonction sumUp');
    this.collection$ = this.clientsService.collection

    // Remplacé par PipeAsync
    //this.clientsService
    //  .collection
    //  .subscribe((data) => {
    //    this.collection = data;
    //    console.log(this.collection); // attention de ne écrire cette ligne en dehors des {}, sinon undefined
    //  });
  }

  changeState(item: Client, event : Event){
    console.log(item, event);
    const state = (event.target as HTMLSelectElement).value as StateClient;
    console.log("nouvel êtat" , state);
    this.clientsService.changeState(item, state).subscribe((response)=>{
      Object.assign(item,response);
      console.log(item);

    })
  }

  ngOnInit(): void {
  }

}
