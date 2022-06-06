import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id!: number;
  product = new Product();
  category: Category[] = [];
  myFiles:any ;
  imgURL:any;
  host = "http://localhost:8080/product/getImage/"


  
  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private productService: ProductService,
    private categoryService: CategoryService,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id)
      .subscribe(data => {
        
        this.product = data;
        console.log(this.product)
      }, error => console.log(error));
    this.getCategoryList();
  }

  onSubmit() {
    this.productService.updateProduct(this.id, this.product).subscribe(data =>{
         this.goToList();
        },
        error =>console.log(error));
  }

  goToList(){
    this.router.navigate(['/product-list']);
  }


  getCategoryList(): void {
    this.categoryService.getCategoryList().subscribe(
      (response: Category[]) => {
        this.category = response;
      }
    );
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

}
