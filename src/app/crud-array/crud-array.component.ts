import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-array',
  imports: [NgFor,FormsModule],
  templateUrl: './crud-array.component.html',
  styleUrl: './crud-array.component.css'
})
export class CRUDArrayComponent {
  title = 'CRUD_array';
  tempValue='';
  arr=["Drashti","Rajvi","Vritti"];
  btnValue="Add";
  isEditable=-1;

  addStudent(e:any){
  
    if(this.isEditable == -1 && this.tempValue!=''){
      this.arr.push(this.tempValue);
      this.tempValue='';
      this.btnValue="Add";
      return
    }
    this.arr[this.isEditable]=this.tempValue;
    this.isEditable=-1;
    this.tempValue='';
  
  }
  deleteValue(i:any){
    this.arr.splice(i,1);
  }
  
  editValue(i:any){
    this.isEditable=i;
    this.btnValue="Edit";
    this.tempValue=this.arr[i];

  }

}
