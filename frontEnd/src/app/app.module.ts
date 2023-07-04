import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http'
import { UserInternService } from './Services/user-intern.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserComponent } from './user/user.component';
import { RequestComponent } from './request/request.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    HomeComponent,
    StaffComponent,
    NavBarComponent,
    UserComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    UserInternService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
