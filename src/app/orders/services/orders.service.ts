import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/modeles/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private readonly urlApi =environment.urlApi
  private collection$!: Observable<Order[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      map(tab=>{
        return tab.map(obj=>{
          return new Order(obj);
        })
      })
    );
  }
  get collection(){
    return this.collection$;
  }
  set collection(col : Observable<Order[]>){
    this.collection$ = col
  }

  changeState(item: Order, state : StateOrder) : Observable<Order> {
    const obj = new Order(item);
    obj.state = state;
    return this.update(obj);
  }

  update(obj: Order) : Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${obj.id}`,obj);
  }
}
