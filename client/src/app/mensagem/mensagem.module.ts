import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMensagemComponent } from './new-mensagem/new-mensagem.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgxLoadingModule} from 'ngx-loading';
import {AlertMessageComponent} from '../alert/alert-message.component';
import {AlertModule} from 'ngx-bootstrap';
import {DocumentoModule} from "../documento/documento.module";

@NgModule({
  declarations: [NewMensagemComponent],
  exports: [
    AlertMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxLoadingModule,
    AlertModule,
    DocumentoModule
  ]
})
export class MensagemModule { }
