import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SinupComponent } from './sinup/sinup.component';



@NgModule({
  declarations: [LoginComponent, SinupComponent],
  imports: [
    CommonModule
  ],
  exports:[LoginComponent,
    SinupComponent],

})
export class UserModule { }
