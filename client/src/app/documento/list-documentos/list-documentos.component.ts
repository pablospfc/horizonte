import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {NewDocumentoComponent} from "../new-documento/new-documento.component";
import {DocumentosCliente} from "../../models/documentoscliente.model";
import {DocumentoclienteService} from "../../services/documentocliente.service";
import {initialState} from "ngx-bootstrap/timepicker/reducer/timepicker.reducer";
import {AlertService} from "../../services/alert.service";
import {ClientesService} from "../../services/clientes.service";
import {TiposdocumentosService} from "../../services/tiposdocumentos.service";
import {DocumentosService} from "../../services/documentos.service";
import {MesesService} from "../../services/meses.service";
import {NgForm} from "@angular/forms";

//import {EventEmitterService} from "../../services/event-emitter.service";

@Component({
  selector: 'app-list-documentos',
  templateUrl: './list-documentos.component.html',
  styleUrls: ['./list-documentos.component.scss']
})
export class ListDocumentosComponent implements OnInit {
  documentos = [];
  clientes = [];
  tiposDocumentos = [];
  docs = [];
  meses = [];
  modalRef: BsModalRef;
  id: number;
  public loading = false;
  public page = 1;
  public totalRec: number;
  public filtro = {
    id_cliente: '',
    id_tipo_documento: '',
    id_documento: '',
    id_mes: '',
    ano: '',
  };
  constructor(private modalService: BsModalService,
              private documentoClienteService: DocumentoclienteService,
              private clienteService: ClientesService,
              private tipoDocumentoService: TiposdocumentosService,
              private documentoService: DocumentosService,
              private mesService: MesesService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.getClientes();
    this.getMeses();
    this.getTiposDocumentos();
    this.list();
  }

  //list the all documents
  public listar(form: NgForm) {
    this.loading = true;
    this.documentoClienteService.list(form.value)
      .subscribe(response => {
        this.loading = false;
        this.documentos = response;
        this.totalRec = this.documentos.length;
      }, error => {

      });
  }

  clear() {
    this.filtro = {
      id_cliente: '',
      id_tipo_documento: '',
      id_documento: '',
      id_mes: '',
      ano: '',
    };
  }

  public list() {
    this.loading = true;
    this.documentoClienteService.list(this.filtro)
      .subscribe(response => {
        this.loading = false;
        this.documentos = response;
        this.totalRec = this.documentos.length;
      }, error => {

      });
  }

  public getClientes() {
    this.clienteService.listApproved()
      .subscribe(response => {
        this.clientes = response;
      }, error => {

      });
  }

  getTiposDocumentos() {
    this.loading = true;
    this.tipoDocumentoService.list()
      .subscribe(response => {
        this.loading = false;
        this.tiposDocumentos = response;
      });
  }

  getDocumentosByTipo(id) {
    this.loading = true;
    this.documentoService.getByTipo(id)
      .subscribe(response => {
        this.docs = response;
        this.loading = false;
      }, error => {
        this.loading = false;
      });
  }

  getMeses() {
    this.loading = true;
    this.mesService.list()
      .subscribe(response => {
        this.loading = false;
        this.meses = response;
      });
  }

  //download attached file
  downloadFile(arquivo: string) {
    this.loading = true;
    this.documentoClienteService.download(arquivo)
      .subscribe((res: any) => {
        this.loading = false;
        this.documentoClienteService.handleFile(res, arquivo);
      });
  }

  openModalUpload(id: number = null) {
    //Open the modal by passing the id, if exists
    this.modalRef = this.modalService.show(NewDocumentoComponent, {
      initialState: {
        id: id
      }
    });

    //Update the table information after close the modal.
    this.modalService.onHide.subscribe((reason: string) => {
      this.list();
    });
  }

  //Open the confirmation modal before to remove document.
  openModalConfirm(template: TemplateRef<any>, id: number) {
    this.id = id;
    this.modalRef = this.modalService.show(template, {
      class: 'modal-sm',
      initialState: {
        id: id
      }
    });
  }

  //remove the document
  confirm(): void {
    this.documentoClienteService.remove(this.id)
      .subscribe(response => {
        const message = (response as any).message;
        this.alertService.success(message);
      }, error => {
        const message = (error as any).message;
        this.alertService.error(message);
      });
    this.modalRef.hide();
    this.list();
  }

  //reject the document removal
  decline(): void {
    this.modalRef.hide();
  }
}
