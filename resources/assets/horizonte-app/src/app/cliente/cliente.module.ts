import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { NewClientesComponent } from './new-clientes/new-clientes.component';
import {RouterModule} from "@angular/router";
import {DataTablesModule} from "angular-datatables";



@NgModule({
  declarations: [ListClientesComponent, NewClientesComponent],
  imports: [
    CommonModule,
    RouterModule,
    DataTablesModule
  ]
})
export class ClienteModule { }
