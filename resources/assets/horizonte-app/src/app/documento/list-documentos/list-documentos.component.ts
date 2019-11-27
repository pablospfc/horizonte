import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {NewDocumentoComponent} from "../new-documento/new-documento.component";
import {DocumentosCliente} from "../../models/documentoscliente.model";
import {DocumentoclienteService} from "../../services/documentocliente.service";
import {initialState} from "ngx-bootstrap/timepicker/reducer/timepicker.reducer";

@Component({
  selector: 'app-list-documentos',
  templateUrl: './list-documentos.component.html',
  styleUrls: ['./list-documentos.component.scss']
})
export class ListDocumentosComponent implements OnInit {

  documentos = [];
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private documentoService: DocumentoclienteService) { }

  ngOnInit() {
    this.listar();
  }

  remover(id: number) {

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
}
