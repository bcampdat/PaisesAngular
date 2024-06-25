import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ConsultaPaisesComponent } from './consulta-paises/consulta-paises.component';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    ConsultaPaisesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TagModule,
    DataViewModule,
    InputTextModule,
    TableModule
  ]
})
export class PaisesModule { }
