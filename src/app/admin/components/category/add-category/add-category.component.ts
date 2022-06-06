import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  public Category : Category[] = []; 

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }

  public onAddCategory(addForm: NgForm): void {
    this.categoryService.addCategory(addForm.value).subscribe(
      (response: Category) => {
        console.log(response);
        this.goToList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  goToList(){
    
    
    
  }

}
