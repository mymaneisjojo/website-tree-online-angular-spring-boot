import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from 'src/app/model/cart';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { Rate } from 'src/app/model/rate';
import { CartService } from 'src/app/service/cart.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { RateService } from 'src/app/service/rate.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  product: Product[] = [];
  rate: Rate[] = [];
  cartItems: Array<CartItem> = new Array<CartItem>();
  category: Category[] = [];
  cartPro: any;
  category_id!: number;
  pageNo: any = 0;
  pageSize: any = 3;
  totalPage!: any[];
  id!: number;
  countStar: number = 0;
  totalStar: number = 0;
  min: number = 0;
  max: number = 0;
  host = "http://localhost:8080/product/getImage/";

  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private cartService: CartService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private rateService: RateService) {

  }


  ngOnInit(): void {
    this.productService.getProductById(this.id)
      .subscribe(data => {

        this.product = data;
        console.log(this.product)


      }, error => console.log(error));




    this.getProductList();
    this.getCategoryList();

  }



  onAddCart(product: Product) {



    console.log(`book name: ${product.name}, and price: ${product.price}`);
    const cartItem = new CartItem(product);
    this.cartService.addToCart(cartItem);

  }



  goToCart() {
    this.router.navigate(['/home/cart']);
  }

  getProductList(): void {
    this.productService.getProductList(this.pageNo, this.pageSize).subscribe(
      (response: any) => {
        this.product = response['content'];
        this.totalPage = new Array(response['totalPages']);

        //  lấy ra danh sách comment rồi tính trung bình cộng số sao
        for (let i = 0; i < this.product.length; i++) {
          this.rateService.getRateByProductId(this.product[i].id).subscribe(data => {
            this.rate = data;
            console.log(this.rate.length)
            if(this.rate.length == 0){
              this.countStar = 5;
            } 
            if(this.rate.length > 0) {
              for (let i = 0; i < this.rate.length; i++) {
                this.totalStar += this.rate[i].star;
              }
  
              this.countStar = Math.ceil(this.totalStar / this.rate.length);
              console.log(this.countStar+ 'ggg')
            }
            
          })
        }

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  listNumber(y: number) {
    this.pageNo = y;
    this.getProductList();
  }




  public getCategoryList(): void {
    this.categoryService.getCategoryList().subscribe(
      (response: Category[]) => {
        this.category = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getProductByCategoryId(categoryId: number) {
    this.productService.getProductByCategoryId(categoryId).subscribe(
      (response: Product[]) => {
        this.product = response;

      }
    )

  }

  getRateByProductId(id: number) {

  }

  searchFrom = this.fb.group({
    search: ['']
  })

  getProductByName() {
    this.productService.getProductByName(this.searchFrom.controls['search'].value).subscribe(
      (response: Product[]) => {
        this.product = response;
        console.log(response)
      }
    )

  }


  findByPriceBetween(min: number, max: number){
    this.productService.findByPriceBetween(min, max).subscribe((response : any) =>{
      this.min = response;
      this.max = response;
      this.product = response;
    })
  }

}
