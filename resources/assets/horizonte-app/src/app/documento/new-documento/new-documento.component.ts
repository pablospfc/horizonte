import { Component, OnInit } from '@angular/core';
import {DocumentosCliente} from "../../models/documentoscliente.model";
import {DocumentoclienteService} from "../../services/documentocliente.service";
import {NgForm} from "@angular/forms";
import {ClientesService} from "../../services/clientes.service";
import {TiposdocumentosService} from "../../services/tiposdocumentos.service";

@Component({
  selector: 'app-new-documento',
  templateUrl: './new-documento.component.html',
  styleUrls: ['./new-documento.component.scss']
})
export class NewDocumentoComponent implements OnInit {

  documento: DocumentosCliente;
  documentos = [];
  public clientes = [];
  public tiposDocumentos = [];
  constructor(private documentoService: DocumentoclienteService,
              private tiposDocumentosService: TiposdocumentosService,
              private clienteService: ClientesService) { }

  ngOnInit() {
    this.documento = new DocumentosCliente();
    this.getClientes();
    this.getTiposDocumentos();
  }

  onSubmit(form: NgForm) {

  }

  getClientes() {
  this. clienteService.listApproved()
    .subscribe( response => {
      this.clientes = response;
    });
  }

  getTiposDocumentos() {
    this.tiposDocumentosService.list()
      .subscribe(response => {
        this.tiposDocumentos = response;
      })
  }

  addDocumento(documento) {
    this.documentos = documento.id_tipo_documento.nome;
    this.documentos.push(documento);
  }

}
