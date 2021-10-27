import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {  

  myvaluee:any="";
   
  output:any="";
  myvalue:any='';
  constructor(private sky:ServService) { }

  ngOnInit(): void {
  }

  calculate(amount:any,time:any,interest:any){
     this.output=((amount*(time/12)*interest)/100);
     console.log(this.output);
  }
   
  data1:any='';
  abc(myvalue:any){
    
    this.sky.dblogic(myvalue);
  }

  list(val:any){
     if(val=="1")
     {
       this.myvalue=7;
     }
     else if(val=="2"){
       this.myvalue=8;

     }
     else if(val=="3")
     {
       this.myvalue=12;
     }
     if(val=="4")
     {
       this.myvalue=10;
     }     
  }



}
