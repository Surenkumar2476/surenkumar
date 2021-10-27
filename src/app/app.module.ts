import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

import { BurgerComponent } from './menu/burger/burger.component';
import { KfcComponent } from './menu/kfc/kfc.component';

import { PizzaComponent } from './menu/pizza/pizza.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './register/login/login.component';
import { ErrorComponent } from './error/error.component';
import { C1Component } from './c1/c1.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    HomeComponent,
    MenuComponent,
   
    BurgerComponent,
    KfcComponent,
    PizzaComponent,
    RegisterComponent,
    LoginComponent,
    ErrorComponent,
    C1Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
