import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/modeles/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private readonly urlApi =environment.urlApi
  private collection$!: BehaviorSubject<Client[]>;

  constructor(private http: HttpClient) {
    this.collection$ = new BehaviorSubject(new Array<Client>());
    this.refreshCollection();
  }
  get collection(){
    return this.collection$;
  }

  refreshCollection(){
    this.http.get<Client[]>(`${this.urlApi}/Clients`).subscribe((obj)=>{
      this.collection$.next(obj);
    });
  }

  changeState(item: Client, state : StateClient) : Observable<Client> {
    const obj = new Client(item);
    obj.state = state;
    return this.update(obj);
  }

  update(obj: Client) : Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}/Clients/${obj.id}`,obj).pipe(
      tap(
        ()=>this.refreshCollection()
      )
    );
  }

  add(obj: Client) : Observable<Client> {
    return this.http.post<Client>(`${this.urlApi}/clients`,obj).pipe(
      tap(
        ()=>this.refreshCollection()
      )
    );
  }
  getItemById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.urlApi}/clients/${id}`).pipe(
      tap(
        ()=>this.refreshCollection()
      )
    );
  }

  remove(obj: Client): Observable<any> {
    return this.http.delete(`${this.urlApi}/clients/${obj.id}`).pipe(
      tap(
        ()=>this.refreshCollection()
      )
    );
  }
}
