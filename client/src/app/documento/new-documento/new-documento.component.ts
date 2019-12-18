import {Component, OnInit, EventEmitter, Input, ViewChild, Output} from '@angular/core';
import {DocumentosCliente} from '../../models/documentoscliente.model';
import {DocumentoclienteService} from '../../services/documentocliente.service';
import {NgForm} from '@angular/forms';
import {ClientesService} from '../../services/clientes.service';
import {TiposdocumentosService} from '../../services/tiposdocumentos.service';
import {MesesService} from '../../services/meses.service';
import {FileUploader, FileLikeObject} from 'ng2-file-upload';
import {BsModalRef} from 'ngx-bootstrap';
import {AlertService} from '../../services/alert.service';
import {ListDocumentosComponent} from '../list-documentos/list-documentos.component';

// import {EventEmitterService} from "../../services/event-emitter.service";
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
  public loading = false;
  constructor(private documentoService: DocumentoclienteService,
              private tiposDocumentosService: TiposdocumentosService,
              private clienteService: ClientesService,
              private mesesService: MesesService,
              private modalRef: BsModalRef,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.documento = new DocumentosCliente();
    this.getClientes();
    this.getTiposDocumentos();
    this.getMeses();
    if (this.id) {
      this.buscar(this.id);
    }
  }

  // get data by id
  buscar(id: number) {
    this.loading = true;
    this.documentoService.getById(id)
      .subscribe(response => {
        this.loading = false;
        this.documento = response;
      });
  }

  // submit form data to backend
  onSubmit(form: NgForm) {
    this.loading = true;
    this.prepareDados(form.value);
    this.documentoService.save(this.formData)
      .subscribe(response => {
        this.loading = false;
        const message = (response as any).message;
        this.alertService.success(message);
      }, error => {
        this.loading = false;
        const message = (error as any).message;
        this.alertService.error(message);
      });
  }

  // get file in the form
  inputFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
    }
  }

  // get data to show in the select box
  getClientes() {
    this.loading = true;
    this.clienteService.listApproved()
      .subscribe(response => {
        this.loading = false;
        this.clientes = response;
      });
  }

  // get data to show in the select box
  getTiposDocumentos() {
    this.loading = true;
    this.tiposDocumentosService.list()
      .subscribe(response => {
        this.loading = false;
        this.tiposDocumentos = response;
      });
  }

  // get data to show in the select box
  getMeses() {
    this.loading = true;
    this.mesesService.list()
      .subscribe(response => {
        this.loading = false;
        this.meses = response;
      });
  }

  // close the modal
  close() {
    this.modalRef.hide();
  }

  // add form values inside formData object
  prepareDados(formulario) {
    formulario.id ? this.formData.append('id', formulario.id) : null;
    formulario.id_cliente ? this.formData.append('id_cliente', formulario.id_cliente) : null;
    formulario.id_tipo_documento ? this.formData.append('id_tipo_documento', formulario.id_tipo_documento) : null;
    formulario.id_mes ? this.formData.append('id_mes', formulario.id_mes ? formulario.id_mes : null) : null;
    formulario.ano ? this.formData.append('ano', formulario.ano ? formulario.ano : null) : null;
    formulario.descricao ? this.formData.append('descricao', formulario.descricao ? formulario.descricao : null) : null;
    this.formData.append('arquivo', this.file);
  }


}