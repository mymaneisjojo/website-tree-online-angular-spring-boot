import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon } from '../model/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  private baseUrl = 'http://localhost:8080/coupon/';  

  constructor(private http:HttpClient) { } 

   getCouponList(): Observable<Coupon[]>{
    return this.http.get<Coupon[]>(`${this.baseUrl}`+'all');  
  }

   addCoupon(coupon: Coupon): Observable<Coupon> {  
    return this.http.post<Coupon>(`${this.baseUrl}`+'add', coupon);  
  }  

  getCouponById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }


  updateCoupon(id: number, coupon: Coupon): Observable<Object> {
    return this.http.put(`${this.baseUrl}update/${id}`, coupon);
  }

  deleteCoupon(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}delete/${id}`, { responseType: 'text' });
  }


  getCouponByCode(code: string): Observable<any> {
    return this.http.get<Coupon[]>(`${this.baseUrl}findByCode/${code}`);
  }
}
