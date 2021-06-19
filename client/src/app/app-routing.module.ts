import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardTemplateComponent } from './templates/dashboard-template/dashboard-template.component';
import { HomeComponent } from './home/home/home.component';
import { LoginTemplateComponent } from './templates/login-template/login-template.component';
import { LoginComponent } from './auth/login/login.component';
import {ListClientesComponent} from './cliente/list-clientes/list-clientes.component';
import {ListBoletosComponent} from './documento/list-boletos/list-boletos.component';
import {ListCertidoesComponent} from './documento/list-certidoes/list-certidoes.component';
import {ListContratosComponent} from './documento/list-contratos/list-contratos.component';
import {ListDeclaracoesComponent} from './documento/list-declaracoes/list-declaracoes.component';
import {ListFaturamentosComponent} from './documento/list-faturamentos/list-faturamentos.component';
import {NewDocumentoComponent} from './documento/new-documento/new-documento.component';
import {ListFolhasPagamentoComponent} from './documento/list-folhas-pagamento/list-folhas-pagamento.component';
import {ListBalencetesComponent} from './documento/list-balencetes/list-balencetes.component';
import {ListDocumentosComponent} from './documento/list-documentos/list-documentos.component';
import {NewClientesComponent} from './cliente/new-clientes/new-clientes.component';
import {AuthGuard} from './guards/auth.guard';
import {NewMensagemComponent} from './mensagem/new-mensagem/new-mensagem.component';
import {UpdateClienteModalComponent} from "./cliente/update-cliente-modal/update-cliente-modal.component";
import {ListUsuariosComponent} from "./usuario/list-usuarios/list-usuarios.component";
import {UpdateUsuarioModalComponent} from "./usuario/update-usuario-modal/update-usuario-modal.component";


const routes: Routes = [
  {
  path: '',
    component: DashboardTemplateComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'list-clientes',
        component: ListClientesComponent
      },
      {
        path: 'list-folhas-pagamento',
        component: ListFolhasPagamentoComponent
      },
      {
        path: 'list-balancetes',
        component: ListBalencetesComponent
      },
      {
        path: 'list-boletos',
        component: ListBoletosComponent
      },
      {
        path: 'list-certidoes',
        component: ListCertidoesComponent
      },
      {
        path: 'list-contratos',
        component: ListContratosComponent
      },
      {
        path: 'list-declaracoes',
        component: ListDeclaracoesComponent
      },
      {
        path: 'list-faturamentos',
        component: ListFaturamentosComponent
      },
      {
        path: 'list-documentos',
        component: ListDocumentosComponent
      },
      {
        path: 'new-documento',
        component: NewDocumentoComponent
      },
      {
        path: 'new-mensagem',
        component: NewMensagemComponent
      },
      {
        path: 'update-cliente',
        component: UpdateClienteModalComponent
      },
      {
        path: 'list-usuarios',
        component: ListUsuariosComponent
      },
      {
        path: 'update-usuario',
        component: UpdateUsuarioModalComponent
      },
    ]
  },
  {
    path: '',
    component: LoginTemplateComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'cadastro',
        component: NewClientesComponent
      },
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
