import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor() { }
  nanval:any='';
  dblogic(myvalue:any){
    console.log("Hello guys");
    this.nanval=myvalue;
  }
}
