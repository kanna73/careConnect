import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserComponent } from './user/user.component';
import { RequestComponent } from './request/request.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'logIN',pathMatch:'full'},
    {path:'logIN',component:LoginComponent},


  {path:'register',component:RegisterComponent},
  {path:'logIN',component:LoginComponent},
  {path:'admin',component:AdminComponent, canActivate:[AuthGuard], data : {roles: ['admin']}},
  {path:'home',component:HomeComponent}, 
  {path:'staff',component:StaffComponent, canActivate:[AuthGuard], data: {roles: ['doctor']}},
  {path:'main',component:NavBarComponent},
  {path:'user',component:UserComponent},
  {path:'resquest',component:RequestComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
