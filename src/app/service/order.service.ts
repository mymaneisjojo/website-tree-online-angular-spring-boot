import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/order/';
  }
  addOrder(order: Order): Observable<Order> {  
    return this.http.post<Order>(`${this.baseUrl}`+'add', order);  
  } 

  getOrderList(): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}`+'all');  
  }

  getOrderById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  updateOrder(id: number, order: Order): Observable<Object> {
    return this.http.put(`${this.baseUrl}update/${id}`, order);
  }

  
}
