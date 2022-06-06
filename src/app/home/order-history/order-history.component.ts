import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Coupon } from 'src/app/model/coupon';
import { Order } from 'src/app/model/order';
import { OrderDetail } from 'src/app/model/order-detail';
import { CouponService } from 'src/app/service/coupon.service';
import { OrderDetailService } from 'src/app/service/order-detail.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orderDetail: OrderDetail[] = [];
  order = new Order();
  coupon = new Coupon();
  totalPriceValue: number = 0;
  id!: number;
  customerInfor: any;
  customer: any;
  coupon_condition!: number;

  constructor(private ordeDetailSer: OrderDetailService,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router,
    private couponService: CouponService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.orderService.getOrderById(this.id).subscribe(data =>{
      this.order = data;
    })
    this.ordeDetailSer.getOrderDetailByOrderId(this.id)
      .subscribe(data => {

        this.orderDetail = data;
        for (let detail of this.orderDetail) {
          this.totalPriceValue += detail.price * detail.quantity;
         
        }
        console.log(this.orderDetail)
      }, error => console.log(error));


    this.orderService.getOrderById(this.id)
      .subscribe((response: Order) => {

        this.order = response;

      }, error => console.log(error));




  }

  

}
