import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';

import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

   product:Product = new Product();
   category: Category[] = [];
    myFiles:any ;
    imgURL:any;
    submitted = false;


  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private fb: FormBuilder
    // private http: HttpClient
  )
  {} 
  myForm = this.fb.group({
        name:['',Validators.required],
        cat:['',Validators.required],
        price:['',Validators.required,Validators.min(100)],
        sale_price:['0', Validators.min(0)],
        image:['',Validators.required],
        status:['0',Validators.required],
        quantity:['',Validators.required, Validators.min(1)],
        description:['',Validators.required],
      });

  ngOnInit(): void {
    this.getCategoryList();

    
    
  }

  get form(){
    return this.myForm.controls;
  }

  insertProduct(): void{  
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('file', this.myFiles);
    formData.append('pro', JSON.stringify(this.myForm.value))
  
   
    this.productService.saveProduct(formData).subscribe(
      (response:Product) => {
        console.log(response);
        Swal.fire(
          'Success!',
          'Add new product success!!!',
          'success'
        )
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
    
    }
  
  onSelectFile(event: any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];

      this.myFiles = file;

      var reader = new FileReader();
      this.imgURL = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      } 
    };
  }

  getCategoryList(): void {
    this.categoryService.getCategoryList().subscribe(
      (response: Category[]) => {
        this.category = response;
      }
    );
  }


   
  
}
