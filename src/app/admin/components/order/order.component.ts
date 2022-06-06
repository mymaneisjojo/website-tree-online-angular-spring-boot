import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderDetail } from 'src/app/model/order-detail';
import { OrderDetailService } from 'src/app/service/order-detail.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderDetail:  OrderDetail[] = [];
  order:  Order[] = [];
  totalPriceValue: number = 0;
  id!: number;
 


  constructor(private router: Router, private ordeDetailSer: OrderDetailService,private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.getOrderList();
   
  }

 

  getOrderList(): void{
    this.orderService.getOrderList().subscribe(
      (response: Order[]) => {
          // console.log(response)
          this.order = response;

      
    })
  }


}
