import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/modeles/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private readonly urlApi =environment.urlApi
  private collection$!: Observable<Client[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}/Clients`);
  }
  get collection(){
    return this.collection$;
  }
  set collection(col : Observable<Client[]>){
    this.collection$ = col
  }

  changeState(item: Client, state : StateClient) : Observable<Client> {
    const obj = new Client(item);
    obj.state = state;
    return this.update(obj);
  }

  update(obj: Client) : Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}/Clients/${obj.id}`,obj);
  }
}
