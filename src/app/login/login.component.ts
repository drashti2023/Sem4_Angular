import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private_fb = inject(FormBuilder)
    private router=inject(Router)
    login:FormGroup=this.private_fb.group({
      UserName:['',[Validators.required,Validators.minLength(3)]],
      Password:['',[Validators.required,Validators.pattern("(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}")]],
    })
  
    loginuser(value:any){
      if(localStorage.getItem("UserName")==value.UserName && localStorage.getItem("Password")==value.Password){
        this.router.navigate(['resume'])
      }else{
        alert("Please enter valid credentials")
      }  
    }


}
