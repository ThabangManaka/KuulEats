import { OrderService } from './../services/order.service';
import { Order } from './../models/Oder';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/Cart';
import { CartItem } from '../models/CartItem';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  reservationId: any;
  constructor(private cartService: CartService,activatedRoute:ActivatedRoute,
    private orderService : OrderService) {

    this.reservationId= activatedRoute.snapshot.paramMap.get('id');
    console.log(this.reservationId)
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
      console.log(this.cart)
    })
   }

  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }

  order() {
       const order:  Order ={
        Description: this.cart,
        ReservationId: this.reservationId
       
     }
     this.orderService.PlaceOrder(order)
   

  
  }

}

  