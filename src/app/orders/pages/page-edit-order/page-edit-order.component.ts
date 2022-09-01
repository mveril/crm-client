import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/modeles/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {

  item$!: Observable<Order>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router :Router,
    private ordersService: OrdersService
    ) {
    // quand le composant est créé, on vérifie l'url
    // récupérer l'order existant grâce à son id
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // appeler la méthode dans le service
    this.item$ =  this.ordersService.getItemById(id)
    // vérifier l'objet obtenu
  }



  ngOnInit(): void {
  }

  onEdit(order:Order){
    this.ordersService.update(order).subscribe(()=>{
      this.router.navigate(["orders"]);
    })

  }
}
