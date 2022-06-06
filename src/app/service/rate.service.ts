import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rate } from '../model/rate';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  private baseUrl = 'http://localhost:8080/rate/';  

  constructor(private http:HttpClient) { } 

   getRateList(): Observable<Rate[]>{
    return this.http.get<Rate[]>(`${this.baseUrl}`+'all');  
  }


   addRate(rate: Rate): Observable<Rate> {  
    return this.http.post<Rate>(`${this.baseUrl}`+'add', rate);  
  } 

  getRateById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }


  updateRate(id: number, rate: Rate): Observable<Object> {
    return this.http.put(`${this.baseUrl}update/${id}`, rate);
  }
  
  getRateByProductId(productId: number): Observable<Rate[]>{
    return this.http.get<Rate[]>(`${this.baseUrl}findRateByProductId/${productId}`)
  }

  deleteRate(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}delete/${id}`, { responseType: 'text' });
  }
  
}
