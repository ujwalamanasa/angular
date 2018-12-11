import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,AbstractControl} from '@angular/forms';
import {DataService} from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
  
})
export class RegistrationComponent implements OnInit  {
  registerForm:FormGroup;
submitted :boolean;  
  
  constructor(private data:DataService, private router:Router) { }
ngOnInit(){
  this.registerForm = new FormGroup({
    uname : new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
     email : new FormControl(null,[Validators.email,Validators.required]),
     password : new FormControl(null, [Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
    reenterpwd : new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(15),this.match.bind(this)])

  });
}
public onsubmit(){
 
  this.submitted = true;
  this.data.insert({
    username:this.registerForm.controls.uname.value,
    password:this.registerForm.controls.password.value

  })
  this.router.navigate(['login']);
}
 match(control:AbstractControl){
 
   if (this.registerForm !== undefined) {
     const pwd = this.registerForm.get('password');
     if(control.value !== pwd.value){
 return {"error":"passwords are not same"};
     }
   }
return null;
}

}

