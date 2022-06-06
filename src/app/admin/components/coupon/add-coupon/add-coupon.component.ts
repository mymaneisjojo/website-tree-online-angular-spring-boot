import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/model/coupon';
import { CouponService } from 'src/app/service/coupon.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {

  coupon : Coupon[] = []; 
  cou = new Coupon();
  constructor(private couponService: CouponService, private router: Router) { }

  ngOnInit(): void {
  }

   onAddCoupon(): void {
    this.couponService.addCoupon(this.cou).subscribe(
      (response: Coupon) => {
        console.log(response);

        this.goToList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  goToList(){
    this.router.navigate(['/coupon-list']);
  }
}
