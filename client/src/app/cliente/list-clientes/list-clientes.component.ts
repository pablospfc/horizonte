import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClientesService} from '../../services/clientes.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {UpdateClienteModalComponent} from '../update-cliente-modal/update-cliente-modal.component';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.scss']
})
export class ListClientesComponent implements OnInit {

  public clientes = [];
  public page = 1;
  public totalRec: number;
  public loading = false;
  modalRef: BsModalRef;

  constructor(private clientesService: ClientesService,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.loading = true;
    this.clientesService.list()
      .subscribe(response => {
        this.loading = false;
        this.clientes = response;
        this.totalRec = this.clientes.length;
      });
  }

  openModalCliente(id) {
    // Open the modal by passing the id, if exists
    this.modalRef = this.modalService.show(UpdateClienteModalComponent, {
      initialState: {
        id
      }
    });

    // Update the table information after close the modal.
    this.modalService.onHide.subscribe((reason: string) => {
      this.listar();
    });
  }

  avaliar(cliente) {
    this.loading = true;
    this.clientesService.toEvaluate(cliente)
      .subscribe(response => {
        this.loading = false;
        this.listar();
      }, error => {

        });
  }

}
