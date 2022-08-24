import { CartPageComponent } from './cart-page/cart-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { RestuarantComponent } from './restuarant/restuarant.component';
import { AuthGuard } from './shared/auth.guard';
import { FoodPageComponent } from './food-page/food-page.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: '', component: RestuarantComponent,
      canActivate:[AuthGuard]
  },
{

  path: 'login', component: LoginComponent
},
{
  path: 'register', component: RegisterComponent
  },
  {
    path: 'reservations/:id', component: ReservationsComponent,
     canActivate:[AuthGuard]
  },
  {
    path: 'restuarant', component: RestuarantComponent,
     canActivate:[AuthGuard]
  },
  {
    path: 'order/:id', component: OrderComponent,
      canActivate:[AuthGuard]
  },

  {path:'check-out', component: CheckoutComponent},
  // { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: OrderComponent },
  {path:'food/:id/:id', component:FoodPageComponent},
  {path:'cart-page/:id', component: CartPageComponent}
]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
