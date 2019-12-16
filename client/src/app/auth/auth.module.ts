import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {DocumentoModule} from "../documento/documento.module";
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [LoginComponent, PerfilComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DocumentoModule
  ]
})
export class AuthModule { }
