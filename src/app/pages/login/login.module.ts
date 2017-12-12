import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: "", component: LoginComponent}])
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
