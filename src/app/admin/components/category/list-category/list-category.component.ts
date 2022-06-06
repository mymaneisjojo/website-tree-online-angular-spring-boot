import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  public category : Category[] = []; 

  constructor(private categoryService: CategoryService, private router: Router) { }

  


  ngOnInit(): void {
    this.getCategoryList();
    
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

  updateCategory(id: number){
    this.router.navigate(['category-update', id]);
  }

  deleteCategory(id: number){
    
    
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You can not recuperate this document!!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((response: any) => {
      if (response.value) {
        this.categoryService.deleteCategory(id).subscribe(data =>{
      
          this.getCategoryList();
        })
    
        Swal.fire(
          'Deleted!',
          'Your document file has been deleted.',
          'success'
        )
      } 
    })


  }


  

}
