import { Order } from './../models/Oder';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = environment.baseUrl + '/order/';
  baseUrlForRegister = environment.baseUrl + '/user/';
  constructor(private http: HttpClient) {}

  PlaceOrder(order: Order){
  
    console.log(order)
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
     return this.http.post<any>(this.baseUrl + 'add/' , order,{ headers: headers })
   }

   getAllOrder(): Observable<string[]> {

    return this.http.get<string[]>(this.baseUrl  );
}
}
