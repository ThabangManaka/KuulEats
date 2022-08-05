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

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    RegisterComponent,
    RestuarantComponent,
    ReservationsComponent,
    OrderComponent,
    TagsComponent,
    SearchComponent,
    NotFoundComponent


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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
