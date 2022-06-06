import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/customer/';
  }

  loginCustomer(customer: Customer): Observable<Object>{
    console.log(customer)
    
    return this.http.post(`${this.baseUrl}`+ 'login', customer)

  }

  registerCustomer(customer: Customer): Observable<Object>{
    return this.http.post(`${this.baseUrl}`+ 'register', customer)
  }

  getAll(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.baseUrl}`+'all');  
  }

  deleteCustomer(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}delete/${id}`, { responseType: 'text' });
  }

  getCustomerById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }


  updateCustomer(id: number, customer: Customer): Observable<Object> {
    return this.http.put(`${this.baseUrl}update/${id}`, customer);
  }

}
