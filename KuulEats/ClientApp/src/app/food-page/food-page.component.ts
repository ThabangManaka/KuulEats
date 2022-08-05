import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../models/Food';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {

  food!: Food;
  reservationId: any;
  constructor(activatedRoute:ActivatedRoute, foodService:FoodService,
    private cartService:CartService, private router: Router) {
      this.reservationId= activatedRoute.snapshot.paramMap.get('id');
      console.log(this.reservationId)
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.food = foodService.getFoodById(params.id);
    })
   }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigate(['/cart-page/',this.reservationId]);
  }
}
