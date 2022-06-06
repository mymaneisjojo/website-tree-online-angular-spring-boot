import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from 'src/app/model/cart';
import { Product } from 'src/app/model/product';
import { Rate } from 'src/app/model/rate';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { RateService } from 'src/app/service/rate.service';
import Swal from 'sweetalert2';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id!: number;
  product = new Product();
  pro: Product[] = []
  rate: Rate[] = [];
  ra = new Rate();
  countStar: number = 0;
  totalStar: number = 0;
  host = "http://localhost:8080/product/getImage/"

  customerInfor: any = sessionStorage.getItem('customerInfor');
  customer = JSON.parse(this.customerInfor);


  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private _cartService: CartService,
    private rateService: RateService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // lấy ra product bởi id product
    this.productService.getProductById(this.id)
      .subscribe(data => {

        this.product = data;
        console.log(this.product)

        // lấy ra 4 product bởi id category

        // this.productService.get3ProductByCategoryId(this.product.cat.id).subscribe(
        //   data => {
        //     this.pro = data;
        //     console.log(this.pro)
        //   }
        // )


      }, error => console.log(error));

    // lấy ra comment bởi id product  
    this.rateService.getRateByProductId(this.id).subscribe(data => {
      this.rate = data;
      console.log(this.rate)
      if(this.rate.length == 0){
        this.countStar = 5;
      } 
      if(this.rate.length > 0) {
        for (let i = 0; i < this.rate.length; i++) {
          this.totalStar += this.rate[i].star;
        }

        this.countStar = Math.ceil(this.totalStar / this.rate.length);
        console.log(this.countStar)
      }

    })




  }

  addToCart() {
    console.log(`name: ${this.product.name}, and price: ${this.product.price}, image: ${this.product.image}`);
    const cartItem = new CartItem(this.product);
    this._cartService.addToCart(cartItem);
  }

  postComment(): void {
    this.ra.cus = this.customer;
    if (this.customer == null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You must login to comment',
        // footer: '<a [routerLink]="['']">Why do I have this issue?</a>'
      })
    } else {
      this.ra.pro = this.product;
      this.rateService.addRate(this.ra).subscribe(
        (response: Rate) => {
          this.ngOnInit();
          Swal.fire(
            'Success!',
            'Your comment has been post.',
            'success'
          )
          console.log(response)
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      )
    }

  }



}
