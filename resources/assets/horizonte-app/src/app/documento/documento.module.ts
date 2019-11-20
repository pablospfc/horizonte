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



@NgModule({
  declarations: [NewDocumentoComponent, ListDocumentosComponent, ListFaturamentosComponent, ListBalencetesComponent, ListBoletosComponent, ListDeclaracoesComponent, ListContratosComponent, ListCertidoesComponent, ListFolhasPagamentoComponent],
  imports: [
    CommonModule
  ]
})
export class DocumentoModule { }
