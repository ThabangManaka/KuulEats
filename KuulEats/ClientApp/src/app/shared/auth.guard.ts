import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router : Router ) {}

  canActivate():any{
    if (this.authService.isLoggedIn()) {
    return true;

    }
    else  {false;
       this.router.navigate(['login']);
    }
  }

}
  

