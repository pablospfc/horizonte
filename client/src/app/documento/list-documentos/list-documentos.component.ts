import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {NewDocumentoComponent} from "../new-documento/new-documento.component";
import {DocumentosCliente} from "../../models/documentoscliente.model";
import {DocumentoclienteService} from "../../services/documentocliente.service";
import {initialState} from "ngx-bootstrap/timepicker/reducer/timepicker.reducer";
import {AlertService} from "../../services/alert.service";

//import {EventEmitterService} from "../../services/event-emitter.service";

@Component({
  selector: 'app-list-documentos',
  templateUrl: './list-documentos.component.html',
  styleUrls: ['./list-documentos.component.scss']
})
export class ListDocumentosComponent implements OnInit {
  documentos = [];
  modalRef: BsModalRef;
  id: number;
  public loading = false;
  constructor(private modalService: BsModalService,
              private documentoService: DocumentoclienteService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.listar();
  }

  //list the all documents
  public listar() {
    this.loading = true;
    this.documentoService.list()
      .subscribe(response => {
        this.loading = false;
        this.documentos = response;
      }, error => {

      });
  }

  //download attached file
  downloadFile(arquivo: string) {
    this.loading = true;
    this.documentoService.download(arquivo)
      .subscribe((res: any) => {
        this.loading = false;
        this.documentoService.handleFile(res, arquivo);
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
      this.listar();
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
    this.documentoService.remove(this.id)
      .subscribe(response => {
        const message = (response as any).message;
        this.alertService.success(message);
      }, error => {
        const message = (error as any).message;
        this.alertService.error(message);
      });
    this.modalRef.hide();
    this.listar();
  }

  //reject the document removal
  decline(): void {
    this.modalRef.hide();
  }
}
