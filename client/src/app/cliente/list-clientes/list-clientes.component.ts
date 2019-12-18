import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClientesService} from '../../services/clientes.service';
import {Clientes} from '../../models/clientes.model';
import {Subject} from 'rxjs';

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

  constructor(private clientesService: ClientesService) { }

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
