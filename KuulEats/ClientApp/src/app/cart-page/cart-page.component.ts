import { OrderService } from './../services/order.service';
import { Order } from './../models/Oder';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Cart } from '../models/Cart';
import { CartItem } from '../models/CartItem';
import { CartService } from '../services/cart.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Food } from '../models/Food';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['imageUrl','name','actions'];
  //dataSource = ELEMENT_DATA;
  //listData: MatTableDataSource<any>;
   dataSource: any;
  cart!: Cart;
  reservationId: any;
  allCartItems: any;
  constructor(private cartService: CartService,activatedRoute:ActivatedRoute,
    private orderService : OrderService,public dialog: MatDialog) {

    this.reservationId= activatedRoute.snapshot.paramMap.get('id');
    console.log(this.reservationId)
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
      console.log(this.cart.items)


    })
   }

  ngOnInit(): void {

    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;

      this.allCartItems=  cart
      console.log( this.cart.items[0].food)
      this.dataSource = new MatTableDataSource<any>(this.allCartItems.food),
      this.dataSource.sort = this.sort,
      this.dataSource.paginator = this.paginator;
    })
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
  // this.restuarantService.getAllResturant().subscribe(allRestuarant=>{
  //   console.log(allRestuarant);
  //   this.dataSource = new MatTableDataSource<any>(allRestuarant),
  //   this.dataSource.sort = this.sort,

  //   this.dataSource.paginator = this.paginator;
  // })
}

