import { CartItem } from './../../models/CartItem';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from '../../models/Cart';
@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss']
})
export class ProductQuantityComponent implements OnInit {
  cart!: Cart;
  constructor(  private cartService: CartService,) {

    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
      console.log(this.cart)
    })
  }

  ngOnInit(): void {
  }

  addToCart() {
 ///  this.cartService.addToCart(this.product);
  }

  removeFromCart() {
   /// this.cartService.removeFromCart(this.product);
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }



}
