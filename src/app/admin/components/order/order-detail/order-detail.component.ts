import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupon } from 'src/app/model/coupon';
import { Order } from 'src/app/model/order';
import { OrderDetail } from 'src/app/model/order-detail';
import { CouponService } from 'src/app/service/coupon.service';
import { OrderDetailService } from 'src/app/service/order-detail.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  orderDetail: OrderDetail[] = [];
  coupon =new Coupon();
  order = new Order();
  totalPriceValue: number = 0;
  id!: number;
  customerInfor: any;
  customer: any;
  coupon_condition!: number;
  coupon_quantity!: number;

  constructor(private ordeDetailSer: OrderDetailService,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router,
    private couponService: CouponService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.orderService.getOrderById(this.id).subscribe(data => {
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

  
  updateOrder(){
    this.order.status = 1;
    this.orderService.updateOrder(this.id, this.order).subscribe(data => {
      alert('success')
    })
  }


}
