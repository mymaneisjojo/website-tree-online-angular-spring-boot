import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/account/login';
  }

  loginAccount(account: Account): Observable<object>{
    console.log(account)
    return this.http.post(`${this.baseUrl}`, account)
  }
}
