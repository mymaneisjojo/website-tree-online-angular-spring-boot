import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCoupon } from '../model/user-coupon';

@Injectable({
  providedIn: 'root'
})
export class UserCouponService {

  private baseUrl = 'http://localhost:8080/user_coupon/';  

  constructor(private http:HttpClient) { } 

   getUserCouponList(): Observable<UserCoupon[]>{
    return this.http.get<UserCoupon[]>(`${this.baseUrl}`+'all');  
  }

   addUserCoupon(userCoupon: UserCoupon): Observable<UserCoupon> {  
    return this.http.post<UserCoupon>(`${this.baseUrl}`+'add', userCoupon);  
  }  

  getUserCouponById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }


  updateUserCoupon(id: number, userCoupon: UserCoupon): Observable<Object> {
    return this.http.put(`${this.baseUrl}update/${id}`, userCoupon);
  }

  deleteUserCoupon(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}delete/${id}`, { responseType: 'text' });
  }
}
