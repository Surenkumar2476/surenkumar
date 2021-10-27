import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  register(name:any,email:any){
     
   
   localStorage.setItem("username",name);
   localStorage.setItem("email",email);
 

   console.log("username: "+name);
   console.log("email   : "+email);

   alert("Register Successfully");
 
   }


}


