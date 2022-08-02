import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RestuarantService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllResturant(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl );
}

}
