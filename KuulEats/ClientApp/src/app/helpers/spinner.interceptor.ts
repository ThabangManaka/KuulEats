import { finalize, Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { SpinnerService } from './../services/spinner.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

    constructor(public spinnerService: SpinnerService){
    
    }
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
  this.spinnerService.show();
  return next.handle(req).pipe(
    finalize(() => this.spinnerService.hide()) 
  );
}
}