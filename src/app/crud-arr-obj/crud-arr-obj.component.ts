import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-arr-obj',
  imports: [FormsModule,NgFor],
  templateUrl: './crud-arr-obj.component.html',
  styleUrl: './crud-arr-obj.component.css'
})
export class CRUDArrObjComponent {
  obj= {firstName: '', 
    lastName: '', 
    semester: '',
    rollNo: '' 
   }; 
isEditable=-1;
arr = [ 
{ firstName: 'Vritti', lastName: 'Surani', semester: '4', rollNo: '427' },
{ firstName: 'Drashti', lastName: 'Rathod', semester: '4', rollNo: '420' },
{ firstName: 'Rajvi', lastName: 'Sadatiya', semester: '4', rollNo: '429' },
];
tempValue="";
addStudent(){
if(this.isEditable==-1 && this.obj.firstName!='' && this.obj.lastName!='' && this.obj.semester!='' && this.obj.rollNo!=''){
  this.arr.push({...this.obj});
}
else{
  this.arr[this.isEditable].firstName=this.obj.firstName
  this.arr[this.isEditable].lastName=this.obj.lastName
  this.arr[this.isEditable].semester=this.obj.semester
  this.arr[this.isEditable].rollNo=this.obj.rollNo
}

this.obj.firstName=""
this.obj.lastName=""
this.obj.semester=""
this.obj.rollNo=""
this.isEditable=-1;

};

deleteValue(i:any){
this.arr.splice(i,1);
};

editValue(i:any){
this.isEditable=i
this.obj.firstName=this.arr[i].firstName
this.obj.lastName=this.arr[i].lastName
this.obj.semester=this.arr[i].semester
this.obj.rollNo=this.arr[i].rollNo
};

}
