import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {NewDocumentoComponent} from "../new-documento/new-documento.component";

@Component({
  selector: 'app-list-documentos',
  templateUrl: './list-documentos.component.html',
  styleUrls: ['./list-documentos.component.scss']
})
export class ListDocumentosComponent implements OnInit {

  documentos = [];
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  remover(id: number) {

  }

  openModalUpload() {
    this.modalRef = this.modalService.show(NewDocumentoComponent);
  }





}
