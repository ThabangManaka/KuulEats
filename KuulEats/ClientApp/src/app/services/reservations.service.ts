import { Reservation } from './../models/reservation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  baseUrl = environment.baseUrl + '/reservation/';
  baseUrlForRegister = environment.baseUrl + '/user/';
  constructor(private http: HttpClient) {}

  AddReservation(reservation: Reservation){
    reservation.StartTime = new Date();
    console.log(reservation.StartTime)
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
     return this.http.post<any>(this.baseUrl + 'add/' , reservation,{ headers: headers })
   }

   getAllReservations(): Observable<string[]> {

    return this.http.get<string[]>(this.baseUrl  );
}
}
