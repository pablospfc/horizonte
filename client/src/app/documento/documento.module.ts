import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDocumentoComponent } from './new-documento/new-documento.component';
import { ListDocumentosComponent } from './list-documentos/list-documentos.component';
import { ListBoletosComponent } from './list-boletos/list-boletos.component';
import { ListDeclaracoesComponent } from './list-declaracoes/list-declaracoes.component';
import { ListContratosComponent } from './list-contratos/list-contratos.component';
import { ListCertidoesComponent } from './list-certidoes/list-certidoes.component';
import {ListBalencetesComponent} from "./list-balencetes/list-balencetes.component";
import {ListFaturamentosComponent} from "./list-faturamentos/list-faturamentos.component";
import { ListFolhasPagamentoComponent } from './list-folhas-pagamento/list-folhas-pagamento.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {FileUploadModule} from "ng2-file-upload";
import {AppModule} from "../app.module";
import {AlertMessageComponent} from "../alert/alert-message.component";
import {AlertModule} from "ngx-bootstrap";
import {NgxLoadingModule} from "ngx-loading";
import {NgxPaginationModule} from "ngx-pagination";



@NgModule({
  declarations: [NewDocumentoComponent, ListDocumentosComponent, ListFaturamentosComponent, ListBalencetesComponent, ListBoletosComponent, ListDeclaracoesComponent, ListContratosComponent, ListCertidoesComponent, ListFolhasPagamentoComponent, AlertMessageComponent],
  exports: [
    AlertMessageComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        FileUploadModule,
        AlertModule,
        NgxLoadingModule,
        NgxPaginationModule
    ]
})
export class DocumentoModule { }
