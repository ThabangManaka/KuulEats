import { CartItem } from './../../models/CartItem';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from '../../models/Cart';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss']
})
export class ProductQuantityComponent implements OnInit {
  cart!: Cart;
 /// @Input() item: ShoppingCartItem;
 @Input() item: any;
  @Output() quantityPlusOne = new EventEmitter();
  @Output() quantityMinusOne = new EventEmitter();
  constructor(  private cartService: CartService,) {

    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
      console.log(this.cart)
    })
  }

  ngOnInit(): void {
    console.log(this.item)
  }

  addToCart() {
 ///  this.cartService.addToCart(this.product);
  }

  removeFromCart() {
   /// this.cartService.removeFromCart(this.product);
  }

  plusOne() {

 
    this.quantityPlusOne.emit();
  }

  minusOne() {
   
    this.quantityMinusOne.emit();
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
   // this.cartService.changeQuantity(cartItem.food.id, quantity);
  }

  


}
