import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-usingformbuilder',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-forms-usingformbuilder.component.html',
  styleUrl: './reactive-forms-usingformbuilder.component.css'
})
export class ReactiveFormsUsingformbuilderComponent {
  private_fb= inject(FormBuilder)
  userForm:FormGroup=this.private_fb.group({
    username:['',[Validators.required,Validators.minLength(3)]],
    age:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
    spi:['',[Validators.required,Validators.max(10), Validators.pattern('^\\d{1,2}(\\.\\d{1,4})?$')]],
    contactno:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
    email:['',[Validators.required,Validators.email]]

  })

}
