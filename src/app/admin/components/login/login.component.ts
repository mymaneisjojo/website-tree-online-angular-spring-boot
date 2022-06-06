import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/model/account';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  account : Account = new Account();
  formLogin: FormGroup = new FormGroup({});
  submitted: boolean = false;
  constructor(private accountService : AccountService, private fb: FormBuilder, private _router:Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      name: ['', Validators.required],
      password:['', Validators.required]
    });
  }
  get f() {return this.formLogin.controls;}
  onLogin(){
    this.submitted = true;
    if(this.formLogin.invalid){return;}
   

    this.accountService.loginAccount(this.formLogin.value).subscribe(data => {
      if(data != null){
      sessionStorage.setItem('adminInfor', JSON.stringify(data));

        this._router.navigate(['/admin']);
      }else{
        alert("Tài khoảm hoặc mật khẩu không hợp lệ");
      }
  })

}

}
