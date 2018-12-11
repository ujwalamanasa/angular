import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
submitted:boolean;
loginForm:FormGroup;

validUser:boolean = false;
  constructor(private data:DataService,private router:Router) { }

  ngOnInit(){
    this.loginForm = new FormGroup({
      uname : new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
      password : new FormControl(null, [Validators.required,Validators.minLength(8),Validators.maxLength(15)]),

  
    })
  }

  onsubmit() {
    this.submitted = true;
    this.validUser = this.data.search({      
      username : this.loginForm.controls.uname.value,
      password : this.loginForm.controls.password.value
    })
    if(this.validUser){ 
    this.router.navigate(['dashboard']);
    
  }
}




}