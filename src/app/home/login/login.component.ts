import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;

  customer: Customer = new Customer();
  name = '';

  constructor(private fb: FormBuilder, private customerService: CustomerService, private _router: Router) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        name: ['', Validators.required],
        password: ['', Validators.required]
      })
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {


    this.customerService.loginCustomer(this.loginForm.value).subscribe(
      customerData => {
      sessionStorage.setItem('customerInfor', JSON.stringify(customerData));
      this._router.navigate(['/home']);
    }



  )


}

  

}
