import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClientesService} from '../../services/clientes.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {UpdateClienteModalComponent} from '../update-cliente-modal/update-cliente-modal.component';
import {NgForm} from '@angular/forms';
import {FiltroCliente} from '../../models/filtrocliente.model';
import {StatusClienteService} from '../../services/statuscliente.service';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.scss']
})
export class ListClientesComponent implements OnInit {

  public clientes = [];
  public statusCliente = [];
  public page = 1;
  public totalRec: number;
  public loading = false;
  public filtroCliente: FiltroCliente;
  modalRef: BsModalRef;

  constructor(private clientesService: ClientesService,
              private statusClienteService: StatusClienteService,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.filtroCliente = new FiltroCliente();
    this.listarStatusCliente();
    this.listar(this.filtroCliente);
  }

  onShow(form: NgForm) {
    this.listar(form.value);
  }

  listar(form) {
    this.loading = true;
    this.clientesService.list(form)
      .subscribe(response => {
        this.loading = false;
        this.clientes = response;
        this.totalRec = this.clientes.length;
      });
  }

  clear() {
    this.filtroCliente.cnpj = null;
    this.filtroCliente.iStatus = null;
    this.filtroCliente.razaoSocial = null;
    this.filtroCliente.responsavel = null;
  }

  listarStatusCliente() {
    this.loading = true;
    this.statusClienteService.list()
      .subscribe(response => {
        this.loading = false;
        this.statusCliente = response;
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
      this.listar(this.filtroCliente);
    });
  }

  avaliar(cliente) {
    this.loading = true;
    this.clientesService.toEvaluate(cliente)
      .subscribe(response => {
        this.loading = false;
        this.listar(this.filtroCliente);
      }, error => {

        });
  }

}
