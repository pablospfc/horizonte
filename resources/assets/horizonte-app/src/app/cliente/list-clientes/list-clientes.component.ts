import { Component, OnInit } from '@angular/core';
import {ClientesService} from "../../services/clientes.service";
import {Clientes} from "../../models/clientes.model";

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.scss']
})
export class ListClientesComponent implements OnInit {

  public clientes = [];
  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
     this.clientesService.list()
      .subscribe(response => {
        this.clientes = response;
      })
  }

  aprovar(cliente) {
    console.log(cliente);
    this.clientesService.approve(cliente)
      .subscribe(response => {
        console.log(response);
        this.listar();
      }, error => {
          console.log("error");
        });
  }

}
