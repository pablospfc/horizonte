import { Component, OnInit, EventEmitter } from '@angular/core';
import {DocumentosCliente} from '../../models/documentoscliente.model';
import {DocumentoclienteService} from '../../services/documentocliente.service';
import {NgForm} from '@angular/forms';
import {ClientesService} from '../../services/clientes.service';
import {TiposdocumentosService} from '../../services/tiposdocumentos.service';
import {MesesService} from '../../services/meses.service';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import {BsModalRef} from 'ngx-bootstrap';
@Component({
  selector: 'app-new-documento',
  templateUrl: './new-documento.component.html',
  styleUrls: ['./new-documento.component.scss']
})
export class NewDocumentoComponent implements OnInit {

  documento: DocumentosCliente;
  meses = [];
  public clientes = [];
  public tiposDocumentos = [];
  private file: File;
  private formData = new FormData();
  modalRef: BsModalRef;
  constructor(private documentoService: DocumentoclienteService,
              private tiposDocumentosService: TiposdocumentosService,
              private clienteService: ClientesService,
              private mesesService: MesesService) { }

  ngOnInit() {
    this.documento = new DocumentosCliente();
    this.getClientes();
    this.getTiposDocumentos();
    this.getMeses();
  }

  hide() {
    this.modalRef.hide();
  }

  onSubmit(form: NgForm) {
    this.prepareDados(form.value);
    this.documentoService.save(this.formData)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

  inputFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
    }
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
      });
  }

  getMeses() {
    this.mesesService.list()
      .subscribe(response => {
        this.meses = response;
      });
  }

  prepareDados(formulario) {
    this.formData.append('id_cliente', formulario.id_cliente);
    this.formData.append('id_tipo_documento', formulario.id_tipo_documento);
    this.formData.append('id_mes', JSON.stringify(formulario.id_mes));
    this.formData.append('ano', JSON.stringify(formulario.ano));
    this.formData.append('descricao', JSON.stringify(formulario.descricao));
    this.formData.append('arquivo', this.file);
  }


}
