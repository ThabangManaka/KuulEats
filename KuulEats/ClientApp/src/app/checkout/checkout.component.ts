import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Address } from '../models/Address';
import { Cart } from '../models/Cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @Output() addressSubmitted = new EventEmitter();

  itemsSubscription: Subscription;
  itemsSubject: BehaviorSubject<Cart>;
  items!: Cart;
  address: Address;
  addressSubscription: Subscription;
  constructor(public cartService: CartService) {
    this.address = new Address();
    this.address.addressLines = []

  // this.itemsSubject =  new BehaviorSubject();
    this.itemsSubscription = this.cartService.getCartObservable().subscribe(items => {
      console.log(items)

      this.items = items
      //this.itemsSubject.next(items);
    })
  }

  ngOnInit(): void {

  }

  async onAddressSubmitted(address: Address) {
    //const order = new Order();
   // order.address = address;
    //order.shoppingCartItems = this.itemsSubject.value;
   // order.date = new Date();

   // const docRef = await this.orderService.create(order);

  //   this.cartService.deleteCart();
  //   this.router.navigate(['/order-success'], {
  //     queryParams: { orderId: docRef.id },
  //   });
  // }
  }
}
