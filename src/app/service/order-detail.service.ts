import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetail } from '../model/order-detail';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/order-detail/';
  }
  addOrderDetail(orderDetail: OrderDetail): Observable<OrderDetail> {  
    return this.http.post<OrderDetail>(`${this.baseUrl}`+'add', orderDetail);  
  } 

  getOrderDetailList(): Observable<OrderDetail[]>{
    return this.http.get<OrderDetail[]>(`${this.baseUrl}`+'all');  
  }

  getOrderDetailById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  getOrderDetailByOrderId(orderId: number): Observable<OrderDetail[]>{
    return this.http.get<OrderDetail[]>(`${this.baseUrl}getOrderDetailByOrder/${orderId}`)
  }
  
}
