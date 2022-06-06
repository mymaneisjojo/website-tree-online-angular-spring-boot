import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../model/customer';
import { Product } from '../model/product';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product: Product[] = []
  customerInfor: any;
  customer: any;
  totalQuantity: number = 0;
  constructor(private _router: Router, private _cartService : CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.customerInfor = sessionStorage.getItem('customerInfor');
  this.customer = JSON.parse(this.customerInfor);
    this.updateCartStatus();
  }

  logOut(){
    sessionStorage.removeItem('customerInfor');
    this._router.navigate(['/home/login']);
  }

  updateCartStatus() {   
    
    this._cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    )
  }
  
   
  
}
