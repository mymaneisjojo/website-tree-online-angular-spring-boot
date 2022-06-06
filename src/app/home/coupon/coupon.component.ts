import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coupon } from 'src/app/model/coupon';
import { UserCoupon } from 'src/app/model/user-coupon';
import { CouponService } from 'src/app/service/coupon.service';
import { UserCouponService } from 'src/app/service/user-coupon.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {
  coupon: Coupon[] = [];
  cou = new Coupon();
  user_coupon = new UserCoupon();
  customerInfor: any = sessionStorage.getItem('customerInfor');
  customer = JSON.parse(this.customerInfor);
  // id!: number;

  constructor(private couponService: CouponService, private userCouponService: UserCouponService, private route: ActivatedRoute) { }

  ngOnInit(): void {    
    this.getCouponList();

  }

  getCouponList(){
    this.couponService.getCouponList().subscribe(data => {
      this.coupon = data;
      console.log(data);
    })
  }

  addUserCoupon(id: number){
    this.couponService.getCouponById(id).subscribe(data => {

      // this.cou = data;
      this.user_coupon.cus= this.customer;
      this.user_coupon.cou = data;
      this.userCouponService.addUserCoupon(this.user_coupon).subscribe(data => {

        // this.userCouponService.getUserCouponById(data.id).subscribe(data => {
        //   this.user_coupon = data;
         
        // })

        // if(this.user_coupon.cou.id == this.cou.id && this.user_coupon.cus.id == this.customer.id){
        //   alert('Khong đc add nữa, add r còn đâu')
        //   console.log('hahaahahah')
        // }
       
      })
      
    })
    
  }
}
