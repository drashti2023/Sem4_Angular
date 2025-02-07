import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  private_fb = inject(FormBuilder)
  private router=inject(Router)
  SignUpForm:FormGroup=this.private_fb.group({
    UserName:['',[Validators.required,Validators.minLength(3)]],
    Password:['',[Validators.required,Validators.pattern("(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}")]],
    Email:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    Contact:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
  })

  signUpUser(value:any){
    localStorage.setItem("UserName",value.UserName),
    localStorage.setItem("Password",value.Password)
    this.router.navigate(['login'])
  }
}
