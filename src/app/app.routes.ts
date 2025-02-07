import { Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { DirectivesComponent } from './directives/directives.component';
import { CRUDArrayComponent } from './crud-array/crud-array.component';
import { CRUDArrObjComponent } from './crud-arr-obj/crud-arr-obj.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsUsingformbuilderComponent } from './reactive-forms-usingformbuilder/reactive-forms-usingformbuilder.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'resume',component:ResumeComponent},
    {path:'directive',component:DirectivesComponent},
    {path:'crud-using-array',component:CRUDArrayComponent},
    {path:'crud-using-object',component:CRUDArrObjComponent},
    {path:'template-form',component:TemplateDrivenFormsComponent},
    {path:'reactive-forms',component:ReactiveFormsComponent},
    {path:'reactive-forms-usingformbuilder',component:ReactiveFormsUsingformbuilderComponent}
];
