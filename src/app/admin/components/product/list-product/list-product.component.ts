import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  public product : Product[] = []; 

  pageNo: any = 0;
  pageSize: any = 3;
  totalPage!: any[];
  total: number = 0;


host = "http://localhost:8080/product/getImage/"
  constructor(private productService: ProductService, private router: Router) { }

  


  ngOnInit(): void {
    this.getProductList();
    
  }

  public getProductList(): void {
    this.productService.getProductList(this.pageNo, this.pageSize).subscribe(
      (response: any) => {
        this.product = response['content'];
        this.totalPage = new Array(response['totalPages']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  listNumber(y: number){
    this.pageNo = y;
    this.getProductList();
  }


  deleteProduct(id: number){
    this.productService.deleteProduct(id).subscribe(data =>{
      this.getProductList();
    })
  }
  

  
}
