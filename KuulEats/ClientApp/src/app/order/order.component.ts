import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../models/Cart';
import { Food } from '../models/Food';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  foods: Food[] = [];
  reservationId: any;
  foodQuantiy:  Cart;
  cart!: Cart;
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private router : Router) {

      this.cartService.getCartObservable().subscribe((cart) => {
        this.cart = cart;
        console.log(this.cart)

      })

    this.reservationId= activatedRoute.snapshot.paramMap.get('id');
     console.log(this.reservationId)
    activatedRoute.params.subscribe((params) => {
      console.log(params)
      if (params.searchTerm)
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      else
        this.foods = foodService.getAll();

        console.log(this.foods)
    })
  }

  addToCart(food:any) {

    console.log(food)

    this.cartService.addToCart(food);
    this.router.navigate(['/cart-page/',this.reservationId]);

  }
  ngOnInit(): void {
  }

}
