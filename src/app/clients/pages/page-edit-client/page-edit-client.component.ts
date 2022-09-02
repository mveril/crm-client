import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/modeles/client';
import { ClientsService } from "../../services/clients.service";

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {

  item$!: Observable<Client>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router :Router,
    private ClientsService: ClientsService
    ) {
    // quand le composant est créé, on vérifie l'url
    // récupérer l'order existant grâce à son id
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // appeler la méthode dans le service
    this.item$ =  this.ClientsService.getItemById(id)
    // vérifier l'objet obtenu
  }



  ngOnInit(): void {
  }

  onEdit(order:Client){
    this.ClientsService.update(order).subscribe(()=>{
      this.router.navigate(["clients"]);
    })
  }
}
