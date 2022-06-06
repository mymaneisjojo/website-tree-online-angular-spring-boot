import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customer : Customer[] = []; 

  constructor(private customerService: CustomerService, private router: Router) { }

  


  ngOnInit(): void {
    this.getCustomerList();
    
  }

  public getCustomerList(): void {
    this.customerService.getAll().subscribe(
      (response: Customer[]) => {
        this.customer = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  deleteCustomer(id: number){
    this.customerService.deleteCustomer(id).subscribe(data =>{
      this.getCustomerList();
    })
  }

}
