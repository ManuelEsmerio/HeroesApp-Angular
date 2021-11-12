import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutRoutingModule } from './aut-routing.module';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AutRoutingModule
  ]
})
export class AuthModule { }
