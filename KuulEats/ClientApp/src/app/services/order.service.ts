import { Order, Orders } from './../models/Oder';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = environment.baseUrl + '/order/';
  baseUrlForRegister = environment.baseUrl + '/user/';

  private order: Orders = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Orders>= new BehaviorSubject(this.order);
  constructor(private http: HttpClient) {}

  PlaceOrder(order: Order){

    console.log(order)
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
     return this.http.post<any>(this.baseUrl + 'add/' , order,{ headers: headers })
   }

   getAllOrder(): Observable<string[]> {

    return this.http.get<string[]>(this.baseUrl  );
}

createOrder(order : Orders) {
  this.setCartToLocalStorage(order);
}
private setCartToLocalStorage(order : Orders): void {

   const OrdersJson = JSON.stringify(order);
    localStorage.setItem('Order',  OrdersJson );
  // this.cartSubject.next(this.cart);
}

  getOrderObservable(): Observable<Orders> {
    return this.cartSubject.asObservable();
  }

private getCartFromLocalStorage(): Orders {
  const OrdersJson = localStorage.getItem('Order');
  return OrdersJson ? JSON.parse(OrdersJson) : new Orders();
}
}
// addToCart(food: Food): void {
//   let cartItem = this.cart.items
//     .find(item => item.food.id === food.id);
//   if (cartItem)
//     return;

//   this.cart.items.push(new CartItem(food));
//   this.setCartToLocalStorage();
// }
