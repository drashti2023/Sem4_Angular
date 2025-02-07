import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  student:any={
    name:'',
    email:'',
    phone:'',
    address:'',
    education:'',
    skills:'',
    experience:'',
    projects:[],
    certificates:[]
};
tempProject:any={}
tempCertificate:any={}

datafill(e:any){
  this.student={...this.student,[e.target.name]:e.target.value}
}
makeProjects(e:any){
  this.tempProject={...this.tempProject,[e.target.name]:e.target.value}
}
newCertificates(e:any){
  this.tempCertificate={...this.tempCertificate,[e.target.name]:e.target.value}
}

addProjects(e:any){
  e.preventDefault();
  this.student.projects.push(this.tempProject);
  this.tempProject = {}; 
  console.log(this.tempProject)
}
addCertificates(e:any){
  e.preventDefault();
  this.student.certificates.push(this.tempCertificate);
  this.tempCertificate = {}; 
  console.log(this.tempCertificate)
}

}
