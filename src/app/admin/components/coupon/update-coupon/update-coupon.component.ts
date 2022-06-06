import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupon } from 'src/app/model/coupon';
import { CouponService } from 'src/app/service/coupon.service';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  
  id!: number;
  cou = new Coupon();
  constructor(private route: ActivatedRoute, private router: Router, private couponService: CouponService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.couponService.getCouponById(this.id)
      .subscribe(data => {
        
        this.cou = data;
      }, error => console.log(error));
  }



  onSubmit() {
    this.couponService.updateCoupon(this.id, this.cou).subscribe(data =>{
         this.goToList();
        },
        error =>console.log(error));
  }

  goToList(){
    this.router.navigate(['/coupon-list']);
  }
}
