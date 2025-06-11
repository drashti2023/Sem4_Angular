import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyFirstApp';
  amount=48000;
  number=8.40;
  name="drashti";

  stuName={
    name:"drashti",
    semester:4,
    course:"bTech",
    rollno:420
  }
  TodaysDate=new Date();


 temp="";
 dispalyDetail(e:any){
  console.log(e.target.value);
  this.temp=e.target.value;
 }
 print(){
  console.log("Button clicked");
 }

 //key event
 keyDown: string = '';
 keyUp: string = '';
 keyPress: string = '';

onKeyDown(event: KeyboardEvent) { 
  this.keyDown = `You pressed: ${event.key}`; 
}
onKeyUp(event: KeyboardEvent) {
  this.keyUp = `KeyUp - You released: ${event.key}`;
}
onKeyPress(event: KeyboardEvent) { 
  this.keyPress = `KeyPress - You are pressing: ${event.key}`;
}
//mouse events
message:string ='';
onClick() { 
  this.message = 'Button clicked!';
} 
onDoubleClick() { 
  this.message = 'Button double-clicked!'; 
} 
onMouseOver() {
   this.message = 'Mouse is over the text!'; 
} 
onMouseOut() { 
    this.message = 'Mouse left the text!';
}
}
