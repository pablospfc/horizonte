import { Component, OnInit, EventEmitter } from '@angular/core';
import {DocumentosCliente} from "../../models/documentoscliente.model";
import {DocumentoclienteService} from "../../services/documentocliente.service";
import {NgForm} from "@angular/forms";
import {ClientesService} from "../../services/clientes.service";
import {TiposdocumentosService} from "../../services/tiposdocumentos.service";
import {MesesService} from "../../services/meses.service";
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
@Component({
  selector: 'app-new-documento',
  templateUrl: './new-documento.component.html',
  styleUrls: ['./new-documento.component.scss']
})
export class NewDocumentoComponent implements OnInit {

  documento: DocumentosCliente;
  documentos = [];
  arquivos = [];
  meses = [];
  public clientes = [];
  public tiposDocumentos = [];
  private file: File;
  private formData = new FormData();

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

  onSubmit() {
    console.log(this.documentos);
    this.documentoService.save(this.documentos)
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

  excluirArquivo(documento){
    let index = this.documentos.findIndex(d => d === documento); //find index in your array
    this.documentos.splice(index, 1);//remove element from array
  }

  addDocumento(form: NgForm) {
    form.value.nome_arquivo = this.file.name;
    this.formData.append('arquivo', this.file);
    form.value.arquivo = this.formData;
    //this.arquivos.push(this.file);
    /*
    this.formData.append('arquivo', this.file);
    this.formData.append('id_cliente', form.value.id_cliente);
    this.formData.append('id_tipo_documento', form.value.id_tipo_documento);
    this.formData.append('id_mes', form.value.id_mes);
    this.formData.append('ano', form.value.ano);
    this.formData.append('descricao', form.value.descricao);
    */
    this.documentos.push(form.value);
  }


}
