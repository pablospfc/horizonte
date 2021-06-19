import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ClientesService} from '../../services/clientes.service';
import {AlertService} from '../../services/alert.service';
import {Clientes} from '../../models/clientes.model';
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-update-cliente-modal',
  templateUrl: './update-cliente-modal.component.html',
  styleUrls: ['./update-cliente-modal.component.scss']
})
export class UpdateClienteModalComponent implements OnInit {

  @Input() id: number;
  public loading;
  cliente: Clientes;
  constructor(private clientesService: ClientesService,
              private modalRef: BsModalRef,
              private alertService: AlertService) { }

  ngOnInit() {
    this.cliente = new Clientes();
    if (this.id) {
      this.buscar(this.id);
    }
  }

  onSubmit(form: NgForm) {
    this.loading = true;
    this.clientesService.update(form.value)
      .subscribe(response => {
       this.alertService.success(response.message);
       this.loading = false;
      }, error => {
        this.alertService.error(error.message);
        this.loading = false;
      });
  }

  close() {
    this.modalRef.hide();
  }

  // get data by id
  buscar(id: number) {
    this.loading = true;
    this.clientesService.getById(id)
      .subscribe(response => {
        this.cliente = response;
        this.loading = false;
      });
  }

}
