import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AdduserComponent } from './adduser/adduser.component';

export const routes: Routes = [
    {path:'',component:UsersComponent},
    {path:'add',component:AdduserComponent},
    {path:'edit/:id',component:AdduserComponent},
    {path:'users/:id',component:UserDetailsComponent}
];
