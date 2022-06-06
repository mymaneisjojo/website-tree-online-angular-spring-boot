import { getLocaleDateFormat } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/model/cart';
import { Coupon } from 'src/app/model/coupon';
import { Order } from 'src/app/model/order';
import { OrderDetail } from 'src/app/model/order-detail';
import { Product } from 'src/app/model/product';
import { UserCoupon } from 'src/app/model/user-coupon';
import { CartService } from 'src/app/service/cart.service';
import { CouponService } from 'src/app/service/coupon.service';
import { OrderDetailService } from 'src/app/service/order-detail.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';
import { UserCouponService } from 'src/app/service/user-coupon.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Order = new Order();
  orderDetail: OrderDetail = new OrderDetail();
  userCoupon: UserCoupon[] = [];
  upUserCo = new UserCoupon();
  couponId = new Coupon();
  customerInfor: any = sessionStorage.getItem('customerInfor');
  customer = JSON.parse(this.customerInfor);
  coupon = new Coupon();
  pro = new Product();
  idUserCo!: number;

  cartItems: CartItem[] = []
  totalPrice: number = 0;
  totalQuantity: number = 0;
  submitted = false;
  // formCus: FormGroup;


  constructor(private orderService: OrderService,
    private _cartService: CartService,
    private ordeDetailSer: OrderDetailService,
    private productService: ProductService,
    private couponService: CouponService,
    private fb: FormBuilder,
    private _router: Router,
    private userCouponService: UserCouponService) {
  }
  formCus = this.fb.group({

    name: [this.customer.name, Validators.required],
    address: [this.customer.address, Validators.required],
    email: [this.customer.email, Validators.required],
    phone: [this.customer.phone, Validators.required],
    note: [''],

  })
  ngOnInit(): void {
    this.cartDetails();
    this.getListUserCoupon();
  }


  cartDetails() {
    this.cartItems = this._cartService.cartItems;

    this._cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    this._cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    this._cartService.computeCartTotals();
  }


  getListUserCoupon() {
    this.userCouponService.getUserCouponList().subscribe(data => {
      this.userCoupon = data;
      console.log(data);
    })
  }

  onChangeObj(newObj: any, old: any) {
    this.idUserCo = old;
    this.userCouponService.getUserCouponById(this.idUserCo).subscribe(data => {
      this.upUserCo = data;
    })
    this.couponService.getCouponById(newObj).subscribe(data => {
      this.couponId = data;

    })
  }

  get f() { return this.formCus.controls; }

  insertCheckout(): void {
    this.submitted = true;
    if (this.formCus.invalid) {
      return;
    }

    this.order.cus = this.customer;
    this.order.name = this.formCus.controls['name'].value;
    this.order.address = this.formCus.controls['address'].value;
    this.order.email = this.formCus.controls['email'].value;
    this.order.phone = this.formCus.controls['phone'].value;
    this.order.note = this.formCus.controls['note'].value;
    this.order.cou = this.couponId;



    this.orderService.addOrder(this.order).subscribe(
      (response: Order) => {
        console.log(response);

        this.upUserCo.status = 1;
        this.userCouponService.updateUserCoupon(this.idUserCo, this.upUserCo).subscribe(data => {}
        )

        for (let index = 0; index < this.cartItems.length; index++) {
          this.orderDetail.ord = response;
          // this.orderDetail.coupon = this.coupon.code ? this.coupon.code : 'no';
          this.productService.getProductById(this.cartItems[index].id).subscribe(data => {
            this.orderDetail.pro = data;
            this.orderDetail.price = this.cartItems[index].unitPrice;


            this.orderDetail.quantity = this.cartItems[index].quantity;
            // console.log(data)
            this.ordeDetailSer.addOrderDetail(this.orderDetail).subscribe(data => { })

          });

        }

        this.resetCart();

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )

  }



  resetCart() {

    this._cartService.cartItems = [];
    this._cartService.totalPrice.next(0);
    this._cartService.totalQuantity.next(0);

    this.formCus.reset();
    this._router.navigate(['/home/success'])

  }

}
