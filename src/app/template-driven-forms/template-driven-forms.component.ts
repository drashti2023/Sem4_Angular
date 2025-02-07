import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  imports: [FormsModule,JsonPipe,NgIf],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent {
  User = { 
    Name: '', 
    Email: '',
     BirthDate: '', 
     SPI:'',
     Contact: '', 
     Confirmed: false 
  };
  
  onSubmit(form: any) { 
    if (form.valid) { 
      console.log(this.User); 
      alert('Form Submitted Successfully!'); 
      form.reset(); 
    } 
    else { 
      alert('Please fill out the form correctly.'); 
    } 
  }

}
