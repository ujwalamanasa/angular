import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  data = [false,false,false]

  set(number) { 
    for(let i = 0;i<this.data.length;i++) {
      if(i === number) {
        this.data[i]  = false;
      }
      else {
        this.data[i] = true;
      }
    }
  }
ngOnInit(){
  
}
  }

