import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/modeles/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  public order = new Order();
  constructor(private ordersService : OrdersService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit($event : Order){
    this.ordersService.add($event).subscribe((data)=>{
      this.router.navigate(["orders"]);
    })
  }
}
