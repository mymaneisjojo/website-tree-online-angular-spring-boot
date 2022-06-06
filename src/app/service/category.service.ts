import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:8080/category/';  

  constructor(private http:HttpClient) { } 

   getCategoryList(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.baseUrl}`+'all');  
  }

   addCategory(category: Category): Observable<Category> {  
    return this.http.post<Category>(`${this.baseUrl}`+'add', category);  
  }  

  getCategoryById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }


  updateCategory(id: number, category: Category): Observable<Object> {
    return this.http.put(`${this.baseUrl}update/${id}`, category);
  }

  deleteCategory(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}delete/${id}`, { responseType: 'text' });
  }
}
