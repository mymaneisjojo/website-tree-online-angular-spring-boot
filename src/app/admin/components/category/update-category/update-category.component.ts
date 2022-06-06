import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  id!: number;
  cat = new Category();
  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoryService.getCategoryById(this.id)
      .subscribe(data => {
        
        this.cat = data;
      }, error => console.log(error));
  }



  onSubmit() {
    this.categoryService.updateCategory(this.id, this.cat).subscribe(data =>{
      console.log(data)
         this.goToList();
        },
        error =>console.log(error));
  }

  goToList(){
    this.router.navigate(['/category-list']);
  }

}
