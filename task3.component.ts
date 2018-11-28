import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss']
})
export class Task3Component implements OnInit {


  constructor() { }
  // a,b will for first div
  ahighlight:boolean = false;
  bfade:boolean = false;
  // c,d will for second div
  chighlight:boolean= false;
  dfade: boolean= false;
  public func(num){
    if(num ===1){
      //console.log("highlighting first div");
      this.ahighlight = true;
      this.bfade = false;
      this.chighlight  = false;
      this.dfade = true;
    }
    else if(num === 2){
      this.ahighlight = false;
      this.bfade = true;
      this.chighlight = true;
      this.dfade = false;
    }
  }
  public defaultValues(){
    this.ahighlight = false;
    this.bfade = false;
    this.chighlight = false;
    this.dfade = false;
  }

  ngOnInit() {
  }

}
