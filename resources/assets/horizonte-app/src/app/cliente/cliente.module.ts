import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { NewClientesComponent } from './new-clientes/new-clientes.component';
import {RouterModule} from "@angular/router";
import {DataTablesModule} from "angular-datatables";
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import {DocumentoModule} from "../documento/documento.module";
import {CpfCnpjModule} from "ng2-cpf-cnpj";
import {AppModule} from "../app.module";



@NgModule({
  declarations: [ListClientesComponent, NewClientesComponent],
  imports: [
    CommonModule,
    RouterModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    DocumentoModule,
    CpfCnpjModule,

  ]
})
export class ClienteModule { }
