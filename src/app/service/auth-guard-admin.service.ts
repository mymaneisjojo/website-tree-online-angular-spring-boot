import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService {

  constructor(private _router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // check trạng thái người dùng đã đăng nhập hay chưa
    // localStorage, sessionStorage
    var checkLogin = sessionStorage.getItem('adminInfo'); // null || json string
    if(!checkLogin){
      // chuyển hướng về login route
      this._router.navigate(['/admin/login']);
      return false;
    }
    return true;
  }
}


