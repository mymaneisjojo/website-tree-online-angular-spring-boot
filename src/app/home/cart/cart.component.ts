import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {  CartItem } from 'src/app/model/cart';
import { Coupon } from 'src/app/model/coupon';
import { Order } from 'src/app/model/order';
import { CartService } from 'src/app/service/cart.service';
import { CouponService } from 'src/app/service/coupon.service';
import { OrderService } from 'src/app/service/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

//   items: Array<CartItem>  =  new Array<CartItem>();
  

//   constructor(private carSrv: CartService, private orderService: OrderService, private router: Router) { }

//   ngOnInit(): void {
//     this.getListCart();
    
//   }

//   public clearCart(){
//     this.carSrv.removeItem();
//     this.getListCart();
// }

// getListCart(){
//   this.items = this.carSrv.getItems();
// }


cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  coupon: Coupon[] = [];
  host = "http://localhost:8080/product/getImage/"


  constructor(private _cartService: CartService, private couponService: CouponService, private fb: FormBuilder) { }

  ngOnInit() {
    this.cartDetails();
  }

  cartDetails(){
    this.cartItems = this._cartService.cartItems;

    this._cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    this._cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    this._cartService.computeCartTotals();
  }

  incrementQuantity(cartItem: CartItem){
    this._cartService.addToCart(cartItem);
  }

  decrementQuantity(cartItem: CartItem){
    this._cartService.decrementQuantity(cartItem);
  }

  remove(cartItem: CartItem){
    this._cartService.remove(cartItem);
  }

  
 
  
}
