import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';
import { UpdateUsuarioModalComponent } from './update-usuario-modal/update-usuario-modal.component';
import {NgxPaginationModule} from "ngx-pagination";
import {NgxLoadingModule} from "ngx-loading";
import {FormsModule} from "@angular/forms";
import {DocumentoModule} from "../documento/documento.module";



@NgModule({
  declarations: [ListUsuariosComponent, UpdateUsuarioModalComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    NgxLoadingModule,
    FormsModule,
    DocumentoModule
  ]
})
export class UsuarioModule { }
