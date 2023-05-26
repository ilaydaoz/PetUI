import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path:'login', component:LoginComponent, pathMatch:'full'},
  {path:'register', component:RegisterComponent},
]
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class UserModule { }
