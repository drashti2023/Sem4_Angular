import { CommonModule, NgClass, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [NgIf,NgClass,NgSwitch,NgSwitchCase,NgSwitchDefault,NgStyle,FormsModule,CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  name:any="true";

  tgValue(){
    this.name=!this.name
  }

  obj={};

  interval:any

  Start(){
    clearInterval(this.interval)
    this.interval=setInterval(()=>{
      let r=Math.ceil(Math.random()*255)
      let g=Math.ceil(Math.random()*255)
      let b=Math.ceil(Math.random()*255)
      this.obj={
        'background-color':"rgb("+r+","+g+","+b+")",
        'height':"25vh"
      }

    },500)
  }

  stop(){
    clearInterval(this.interval)
  }

  dayInput:any = '';
  
   classObj={
    first:true,
    second:false
   }
}
