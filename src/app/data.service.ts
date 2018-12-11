import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
userdetails=[{username:"manasa",password:"11111111"}];
loggedinuser;
  constructor() { }
  insert(data){
    this.userdetails.push(data);
  
  }

 getDetails(){
   return this.loggedinuser;
 }
  
  search(data) {
    for(let details of this.userdetails) 
    {
      if(JSON.stringify(details) == JSON.stringify(data)) {
this.loggedinuser = JSON.stringify(details);
        return true;
    }
    return false;
  }

}
}
