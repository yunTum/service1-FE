import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DisplayDataComponent } from './display-data/display-data/display-data.component';


@NgModule({
  declarations: [
    LoginComponent,
    DisplayDataComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    DisplayDataComponent
  ]
})
export class MainModule { }
