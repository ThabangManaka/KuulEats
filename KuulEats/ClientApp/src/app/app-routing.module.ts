
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { RestuarantComponent } from './restuarant/restuarant.component';
import { AuthGuard } from './shared/auth.guard';

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
    path: 'order', component: OrderComponent, 
      canActivate:[AuthGuard]
  },
]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
