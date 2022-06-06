import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/product/';  

  constructor(private http:HttpClient) { } 
  get4Products(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}list`);
  }

  get4ProductsDESC(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}listDESC`);
  }

  getProductsSale(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}sale`);
  }

   getProductList(pageNo: any, pageSize: any): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}all?pageNo=${pageNo}&pageSize=${pageSize}`);  
  }

  addProduct(product: Product): Observable<Product> {  
    return this.http.post<Product>(`${this.baseUrl}`+'add', product);  
  } 
  saveProduct(formData: FormData): Observable<any> {  
    return this.http.post<Product>(`${this.baseUrl}`+'file', formData);  
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  getProductByCategoryId(categoryId: number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}getProductByCategory/${categoryId}`);  
  }

  get3ProductByCategoryId(categoryId: number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}get3ProductByCategory/${categoryId}`);  
  }


  getProductByName(search: string): Observable<any> {
    return this.http.get<Product[]>(`${this.baseUrl}findByName/${search}`);
  }


  updateProduct(id: number, product: Product): Observable<Object> {
    return this.http.put(`${this.baseUrl}update/${id}`, product);
  }

  deleteProduct(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  findByPriceBetween(min: number, max: number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}${min}/${max}`)
  }
}
