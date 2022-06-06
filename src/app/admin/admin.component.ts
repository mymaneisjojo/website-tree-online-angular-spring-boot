import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminInfor: any;
  admin: any;
  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.adminInfor = sessionStorage.getItem('adminInfor');
    this.admin = JSON.parse(this.adminInfor);
    
  }

  logOut(){
    sessionStorage.removeItem('adminInfo');
    this._router.navigate(['/admin/login']);
  }

}
