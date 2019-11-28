import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {NewDocumentoComponent} from "../new-documento/new-documento.component";
import {DocumentosCliente} from "../../models/documentoscliente.model";
import {DocumentoclienteService} from "../../services/documentocliente.service";
import {initialState} from "ngx-bootstrap/timepicker/reducer/timepicker.reducer";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-list-documentos',
  templateUrl: './list-documentos.component.html',
  styleUrls: ['./list-documentos.component.scss']
})
export class ListDocumentosComponent implements OnInit {
  documentos = [];
  modalRef: BsModalRef;
  id: number;
  constructor(private modalService: BsModalService,
              private documentoService: DocumentoclienteService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
     this.documentoService.list()
      .subscribe(response => {
        this.documentos = response;
      },error => {

      });
  }

  downloadFile(arquivo: string) {
    this.documentoService.download(arquivo)
      .subscribe((res: any) => {
        this.documentoService.handleFile(res, 'arquivo.pdf');
      });
  }

  openModalUpload(id: number = null) {
    this.modalRef = this.modalService.show(NewDocumentoComponent, {
      initialState: {
        id: id
      }
    });
  }

  openModalConfirm(template: TemplateRef<any>, id: number) {
    this.id = id;
    this.modalRef = this.modalService.show(template, {
      class: 'modal-sm',
      initialState: {
        id: id
      }
    });
  }

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

  decline(): void {
    this.modalRef.hide();
  }
}
