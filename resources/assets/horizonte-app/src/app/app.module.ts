import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardTemplateComponent } from './templates/dashboard-template/dashboard-template.component';
import { LoginTemplateComponent } from './templates/login-template/login-template.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import {ClienteModule} from "./cliente/cliente.module";
import {DocumentoModule} from "./documento/documento.module";
import {HttpClientModule} from "@angular/common/http";
import {DataTablesModule} from "angular-datatables";
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    AppComponent,
    DashboardTemplateComponent,
    LoginTemplateComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    DocumentoModule,
    HttpClientModule,
    DataTablesModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
