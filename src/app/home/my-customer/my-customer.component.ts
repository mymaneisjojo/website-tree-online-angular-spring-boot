import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { Order } from 'src/app/model/order';
import { OrderDetail } from 'src/app/model/order-detail';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderDetailService } from 'src/app/service/order-detail.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-my-customer',
  templateUrl: './my-customer.component.html',
  styleUrls: ['./my-customer.component.css']
})
export class MyCustomerComponent implements OnInit {

  order: Order[] = [];
  or = new Order();
  cus  = new Customer();
  totalPriceValue: number = 0;
  id!: number;



  constructor(private router: Router, 
    private customerService: CustomerService, 
    private route:  ActivatedRoute,
    private orderService: OrderService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    

    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data =>{
      this.cus = data;
      console.log(data)

    })

    this.orderService.getOrderList()
      .subscribe(data => {

        this.order = data;
       
      }, error => console.log(error));


      


  }

  form = this.fb.group(
    {
      name: ['', Validators.required],
     
      
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],
    })

  updateCustomer(){
    this.customerService.updateCustomer(this.id, this.cus).subscribe(data => {
      alert('update account success')
    })
  }

  

  logOut(){
    sessionStorage.removeItem('customerInfor');
    sessionStorage.removeItem('cartItems');
    this.router.navigate(['/home/login']);
  }
}
