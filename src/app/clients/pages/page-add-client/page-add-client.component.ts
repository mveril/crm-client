import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/modeles/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {
  public order = new Client();
  constructor(private clientsService : ClientsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit($event : Client){
    this.clientsService.add($event).subscribe(()=>{
      this.router.navigate(["clients"]);
    })
  }
}
