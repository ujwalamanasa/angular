import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[DatePipe]
})
export class DashboardComponent implements OnInit {

  constructor(private data:DataService,private datePipe:DatePipe) { }
username:string;
password:string;

  transformDate(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
  details;
  
  ngOnInit() {
  // this.details =  this.data.getDetails();
   this.username =  this.data.getDetails().username;
   this.password = this.data.getDetails().password;

  }
  


}
