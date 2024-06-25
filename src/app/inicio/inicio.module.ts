import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';



@NgModule({
  declarations: [
    HomeComponent,
    Error404Component
  ],
  imports: [
    CommonModule
  ]
})
export class InicioModule { }
