import { Routes } from '@angular/router';
import { CentercolumnComponent } from './centercolumn/centercolumn.component';
import { LeftcolumnComponent } from './leftcolumn/leftcolumn.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:'', component:CentercolumnComponent},
    {path:'left', component:LeftcolumnComponent},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent}
];
