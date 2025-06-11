import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:'',component:ContentComponent},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent}
];
