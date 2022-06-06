import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rate } from 'src/app/model/rate';
import { RateService } from 'src/app/service/rate.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  id!: number;
  public rate : Rate[] = []; 
  ra = new Rate();
  constructor(private rateService: RateService, private router: Router, private route: ActivatedRoute) { }

  


  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    // this.rateService.getRateById(this.id)
    //   .subscribe(data => {})
    this.getRateList();
    
  }

  public getRateList(): void {
    this.rateService.getRateList().subscribe(
      (response: Rate[]) => {
        this.rate = response;
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  // updateStatus1(id: number){
  //   id = this.route.snapshot.params['id'];
  //   this.rateService.getRateById(id)
  //     .subscribe(data => {
  //       this.ra = data;
  //       this.ra.status = 1;
  //       this.rateService.updateRate(id, this.ra).subscribe(data =>{
  //        console.log(data)
  //       //  this.router.navigate(['/comment-list']);
  //       }
          
  //       )
  //     })
    
  // }
    
  deleteRate(id: number){
    
    
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You can not recuperate this document!!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((response: any) => {
      if (response.value) {
        this.rateService.deleteRate(id).subscribe(data =>{
      
          this.getRateList();
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
