import {Component, OnInit, EventEmitter, Input, ViewChild} from '@angular/core';
import {DocumentosCliente} from '../../models/documentoscliente.model';
import {DocumentoclienteService} from '../../services/documentocliente.service';
import {NgForm} from '@angular/forms';
import {ClientesService} from '../../services/clientes.service';
import {TiposdocumentosService} from '../../services/tiposdocumentos.service';
import {MesesService} from '../../services/meses.service';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import {BsModalRef} from 'ngx-bootstrap';
import {AlertService} from "../../services/alert.service";
import {ListDocumentosComponent} from "../list-documentos/list-documentos.component";
@Component({
  selector: 'app-new-documento',
  templateUrl: './new-documento.component.html',
  styleUrls: ['./new-documento.component.scss']
})
export class NewDocumentoComponent implements OnInit {
@Input() id: number;

  documento: DocumentosCliente;
  meses = [];
  public clientes = [];
  public tiposDocumentos = [];
  private file: File;
  private formData = new FormData();
  constructor(private documentoService: DocumentoclienteService,
              private tiposDocumentosService: TiposdocumentosService,
              private clienteService: ClientesService,
              private mesesService: MesesService,
              private modalRef: BsModalRef,
              private alertService: AlertService) { }

  ngOnInit() {
    this.documento = new DocumentosCliente();
    this.getClientes();
    this.getTiposDocumentos();
    this.getMeses();
  }

  onSubmit(form: NgForm) {
    this.prepareDados(form.value);
    this.documentoService.save(this.formData)
      .subscribe(response => {
        const message = (response as any).message;
        this.alertService.success(message);
      }, error => {
        const message = (error as any).message;
        this.alertService.error(message);
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

  close(){
    this.modalRef.hide();
  }

  prepareDados(formulario) {
    //adiciona valores do formulários no objeto formData
    formulario.id_cliente ? this.formData.append('id_cliente', formulario.id_cliente) : null;
    formulario.id_tipo_documento ? this.formData.append('id_tipo_documento', formulario.id_tipo_documento) : null;
    formulario.id_mes ? this.formData.append('id_mes', formulario.id_mes ? formulario.id_mes : null) : null;
    formulario.ano ? this.formData.append('ano', formulario.ano ? formulario.ano : null) : null;
    formulario.descricao ? this.formData.append('descricao', formulario.descricao ? formulario.descricao : null) :null;
    this.formData.append('arquivo', this.file);
  }


}
