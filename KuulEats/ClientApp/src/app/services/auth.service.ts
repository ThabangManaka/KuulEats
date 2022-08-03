import { UserForRegister } from './../models/user';

import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserForLogin } from '../models/user';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl + '/authenticate/';
  baseUrlForRegister = environment.baseUrl + '/user/';
  constructor(private http: HttpClient) {}

  Login(user: UserForLogin){
   console.log(user)
   let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.baseUrl , user,{ headers: headers })
  }
 // localStorage.setItem('currentUser', JSON.stringify({ username: user.userName, token: data.token }));
 isLoggedIn(): boolean {
  
    return localStorage.getItem('token')!=null;
  }

  Register(user : UserForRegister) {
    return this.http.post<any>(this.baseUrlForRegister, user).pipe(tap(data => {
      console.log(data)
    }))
  }

}
