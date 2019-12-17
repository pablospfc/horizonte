import {Component, OnInit} from '@angular/core';
import {ClientesService} from "../../services/clientes.service";
import {NgForm} from "@angular/forms";
import {AlertService} from "../../services/alert.service";
import {Clientes} from "../../models/clientes.model";

@Component({
  selector: 'app-new-clientes',
  templateUrl: './new-clientes.component.html',
  styleUrls: ['./new-clientes.component.scss']
})
export class NewClientesComponent implements OnInit {

  cliente: Clientes;
  public loading = false;
  constructor(private clientesService: ClientesService, private alertService: AlertService) {
  }

  ngOnInit() {
    this.cliente = new Clientes();
  }

  onSubmit(form: NgForm) {
    this.loading = true;
    this.clientesService.save(form.value)
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

}
