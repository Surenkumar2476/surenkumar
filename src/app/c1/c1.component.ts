import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private xyz:ServService) { }

  ngOnInit(): void {
  }
  number:any='';
  abc(){
    this.number=this.xyz.nanval;
  }

}
