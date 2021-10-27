import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Foodbaba';
  constructor(private router: Router) {

  }


  abc(){

   this.router.navigateByUrl('menu/burger');
   
  }
  abd(){
    this.router.navigateByUrl('menu/pizza');
    
   }

   abe(){
     this.router.navigateByUrl('menu/kfc');
   }

}
