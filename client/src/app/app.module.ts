import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardTemplateComponent } from './templates/dashboard-template/dashboard-template.component';
import { LoginTemplateComponent } from './templates/login-template/login-template.component';
import {ClienteModule} from './cliente/cliente.module';
import {DocumentoModule} from './documento/documento.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertMessageComponent } from './alert/alert-message.component';
import {AlertModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from './guards/auth.guard';
import {TokenInterceptor} from './interceptors/token.interceptor';
import {RefreshTokenInterceptor} from './interceptors/refresh-token.interceptor';
import {AplicationErrorHandle} from './app.error-handle';
import {CpfCnpjModule} from 'ng2-cpf-cnpj';
import {AuthModule} from './auth/auth.module';
import {HomeModule} from './home/home.module';
import {LayoutModule} from './layout/layout.module';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import {NgxPaginationModule} from 'ngx-pagination';
import {MensagemModule} from './mensagem/mensagem.module';
import {UsuarioModule} from './usuario/usuario.module';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    DashboardTemplateComponent,
    LoginTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    AuthModule,
    HomeModule,
    LayoutModule,
    HttpClientModule,
    DataTablesModule,
    DocumentoModule,
    MensagemModule,
    UsuarioModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    NgxMaskModule.forRoot(),
    NgxPaginationModule,
    NgxLoadingModule.forRoot({animationType: ngxLoadingAnimationTypes.circle,
      backdropBorderRadius: '4px',
      primaryColour: '#FFFF00',
      secondaryColour: '#0000CD'
       }),
    CpfCnpjModule,
    FormsModule,
  ],
  providers: [ AuthGuard,
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true
    },
    {
      provide: ErrorHandler, useClass: AplicationErrorHandle
    }
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
