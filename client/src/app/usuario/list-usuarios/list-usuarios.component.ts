import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../../services/usuarios.service";
import {UpdateClienteModalComponent} from "../../cliente/update-cliente-modal/update-cliente-modal.component";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {UpdateUsuarioModalComponent} from "../update-usuario-modal/update-usuario-modal.component";

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.scss']
})
export class ListUsuariosComponent implements OnInit {

  public usuarios = [];
  public page = 1;
  public totalRec;
  public loading;
  modalRef: BsModalRef;
  constructor(private usuariosService: UsuariosService,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.list();
  }

  openModalUsuario(id) {
// Open the modal by passing the id, if exists
    this.modalRef = this.modalService.show(UpdateUsuarioModalComponent, {
      initialState: {
        id
      }
    });

    // Update the table information after close the modal.
    this.modalService.onHide.subscribe((reason: string) => {
      this.list();
    });
  }

  list() {
    this.loading = true;
    this.usuariosService.list()
     .subscribe(response => {
       this.usuarios = response;
       this.loading = false;
     }, error => {
       this.loading = false;
     });
  }

}
