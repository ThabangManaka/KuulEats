
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { RestuarantComponent } from './restuarant/restuarant.component';

const routes: Routes = [{
  path: '', component: LoginComponent
},
{
  path: 'register', component: RegisterComponent
  },
  {
    path: 'reservations', component: ReservationsComponent
  },
  {
    path: 'restuarant', component: RestuarantComponent
  },
  {
    path: 'order', component: OrderComponent
  },
]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
