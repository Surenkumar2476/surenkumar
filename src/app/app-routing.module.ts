import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { BurgerComponent } from './menu/burger/burger.component';
import { KfcComponent } from './menu/kfc/kfc.component';

import { PizzaComponent } from './menu/pizza/pizza.component';
import { MenuComponent } from './menu/menu.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './register/login/login.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [{
  path:'location',
  component: LocationComponent
},
{
  path:'home',
  component:HomeComponent
},
{
  path:'menu',
  component:MenuComponent
},

{
  path:'menu',
  children:[{
    path:'burger',
    component:BurgerComponent
  },
  {
    path:'pizza',
    component:PizzaComponent
  }, 
  {
    path:'kfc',
    component:KfcComponent
  }
]},

{
  path:'register',
  component:RegisterComponent
},

{
  path:'register',
  children:[{
    path:'login',
    component:LoginComponent
  }
]},

{
  path:'',
  component:HomeComponent
},

{
  path:'**',
  component:ErrorComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
