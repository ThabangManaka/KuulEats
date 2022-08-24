import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  isExpanded = false;
  userLoggeInd: any
  numberInCart: number;
  cartQuantity=0;
   constructor(private router: Router,  private authService: AuthService,cartService:CartService) {
     cartService.getCartObservable().subscribe((newCart) => {
      console.log(newCart)
    this.cartQuantity = newCart.totalCount;
    this.numberInCart= newCart.totalCount;
  })
 }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  user() {
  //this.authService.isLoggedIn()
  this.userLoggeInd= localStorage.getItem("currentUser")
  }
  
  logout() {
   localStorage.clear();
      this.router.navigate(["login"]);
  }

// userLoggeInd= localStorage.getItem("currentUser");
}
