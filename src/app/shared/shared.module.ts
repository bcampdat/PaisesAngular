import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RelojComponent } from './reloj/reloj.component';
import { PieComponent } from './pie/pie.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent,
    RelojComponent,
    PieComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    RelojComponent,
    PieComponent
  ]
})
export class SharedModule { }