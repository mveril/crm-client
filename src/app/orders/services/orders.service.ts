import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/modeles/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private readonly urlApi =environment.urlApi
  //private collection$!: Observable<Order[]>;
  private collection$!: BehaviorSubject<Order[]>;

  constructor(private http: HttpClient) {
    this.collection$ = new BehaviorSubject(new Array<Order>())
    this.refreshCollection()
  }

  getAll(){
    return this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      map(tab=>{
        return tab.map(obj=>{
          return new Order(obj);
        })
      }))
  }

  private refreshCollection() {
   this.getAll().subscribe((orders)=> this.collection$.next(orders))
  }
  get collection(){
    this.refreshCollection();
    return this.collection$;
  }

  changeState(item: Order, state : StateOrder) : Observable<Order> {
    const obj = new Order(item);
    obj.state = state;
    return this.update(obj);
  }

  update(obj: Order) : Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${obj.id}`,obj).pipe(
      tap(()=>{
        this.refreshCollection();
      })
    );
  }

  add(obj: Order) : Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`,obj).pipe(
      tap(()=>{
           this.refreshCollection();
      })
    );
  }
  getItemById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }
  delete(obj:Order){
    return this.http.delete<Order>(`${this.urlApi}/orders/${obj.id}`).pipe(
      tap(()=>{
           this.refreshCollection();
      })
    );
  }
}
