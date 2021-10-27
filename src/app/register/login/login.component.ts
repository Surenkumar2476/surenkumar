import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  
   myname:any;
   myemail:any;

  constructor() { }

  ngOnInit(): void {
  }

  userinput(username:any,email:any){
    this.myname=localStorage.getItem("username");
    this.myemail=localStorage.getItem("email");
    
    if(username!=this.myname || email!=this.myemail)
    {
      if(username!=this.myname)
      {
        alert("Check username");
      }
      else{
        alert("Check Email");
      }
      
    }
    else{
      alert("Successfully logged in");
      
    }
  }

}
