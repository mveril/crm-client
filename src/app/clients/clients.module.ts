import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { SharedModule } from '../shared/shared.module';
import { FormClientComponent } from './components/form-client/form-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PageEditClientComponent,
    PageAddClientComponent,
    PageListClientsComponent,
    FormClientComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClientsRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    FormClientComponent
  ]
})
export class ClientsModule { }
