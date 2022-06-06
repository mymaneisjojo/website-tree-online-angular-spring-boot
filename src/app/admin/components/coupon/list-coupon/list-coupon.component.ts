import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/model/coupon';
import { CouponService } from 'src/app/service/coupon.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-coupon',
  templateUrl: './list-coupon.component.html',
  styleUrls: ['./list-coupon.component.css']
})
export class ListCouponComponent implements OnInit {

  public coupon : Coupon[] = []; 
   today = new Date();

  // date = Date;
  constructor(private couponService: CouponService, private router: Router) { }

  


  ngOnInit(): void {
    this.getCouponList();
    console.log(this.today);
  }

  public getCouponList(): void {
    this.couponService.getCouponList().subscribe(
      (response: Coupon[]) => {
        this.coupon = response;

        console.log(this.coupon)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  updateCoupon(id: number){
    this.router.navigate(['coupon-update', id]);
  }

  deleteCoupon(id: number){
    
    
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You can not recuperate this document!!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((response: any) => {
      if (response.value) {
        this.couponService.deleteCoupon(id).subscribe(data =>{
      
          this.getCouponList();
        })
    
        Swal.fire(
          'Deleted!',
          'Your document file has been deleted.',
          'success'
        )
      } 
    })


  }

}
