import { AddressDisplayComponent } from './partials/address-display/address-display.component';
import { OrderSuccessComponent } from './partials/order-success/order-success.component';
import { OrderSummaryComponent } from './partials/order-summary/order-summary.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { AddressFormComponent } from './partials/address-form/address-form.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductQuantityComponent } from './partials/product-quantity/product-quantity.component';
import { SharedModule } from './shared/shared.module';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { OrderComponent } from './order/order.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { RestuarantComponent } from './restuarant/restuarant.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { TagsComponent } from './partials/tags/tags.component';
import { SearchComponent } from './partials/search/search.component';
import { NotFoundComponent } from './partials/not-found/not-found.component';

import { ReservationsModule } from './reservations/reservations.module';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    RegisterComponent,
    RestuarantComponent,
    OrderComponent,
    TagsComponent,
    SearchComponent,
    NotFoundComponent,
    FoodPageComponent,
    CartPageComponent,
    ProductQuantityComponent,
    CheckoutComponent,
    AddressFormComponent,
    OrderReviewComponent,
    OrderSummaryComponent,
    OrderSuccessComponent,
    AddressDisplayComponent,




  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,

    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot([
    ]),
    BrowserAnimationsModule,
    SharedModule,
    ReservationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
