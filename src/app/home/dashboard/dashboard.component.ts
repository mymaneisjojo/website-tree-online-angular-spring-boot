import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/model/cart';
import { Product } from 'src/app/model/product';
import { Rate } from 'src/app/model/rate';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { RateService } from 'src/app/service/rate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   product : Product[] = []; 
   rate : Rate[] = []; 
   productSale : Product[] = []; 
   productDesc : Product[] = []; 
   pro= new Product();
   countStar: number = 0;
   totalStar: number = 0;
   host = "http://localhost:8080/product/getImage/"
  constructor(private productService: ProductService, private router: Router, private cartService: CartService, private rateService: RateService) { }

  


  ngOnInit(): void {
    this.getListProduct();
    this.getProductsHot();
    this.getListProductDESC();
  }

  getProductsHot(){
    this.productService.getProductsSale().subscribe(data => {
      this.productSale = data;

     
    })
  }

  getListProduct(){
    this.productService.get4Products().subscribe(data => {
      this.product = data;

    })
  }

  getListProductDESC(){
    this.productService.get4ProductsDESC().subscribe(data => {
      this.productDesc = data;

    })
  }


  onAddCart(product:Product){
   

    
    console.log(`book name: ${product.name}, and price: ${product.price}`);
    const cartItem = new CartItem(product);
    this.cartService.addToCart(cartItem);
  
  }
}
