import { OrderService } from './../services/order.service';
import { ConstantPool } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Address } from '../models/Address';
import { Cart } from '../models/Cart';
import { Orders } from '../models/Oder';
import { CartService } from '../services/cart.service';
import { Route, Router } from '@angular/router';

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
  constructor(public cartService: CartService, public orderService : OrderService,
    private router : Router) {
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
     console.log(address)
       const order = new Orders();
   order.id = "xzxcz";
    order.address = address;
    order.cart =this.items;
    //order.shoppingCartItems = this.itemsSubject.value;
    order.date = new Date();
        this.orderService.createOrder(order)
   // const docRef = await this.orderService.create(order);

  //   this.cartService.deleteCart();

        this.cartService.clearCart()
      //  this.router.navigate(['/order-success'])
     this.router.navigate(['/order-success'], {
       queryParams: { orderId:   order.id },
    });
   }
  }

