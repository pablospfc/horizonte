import { Component, OnInit } from '@angular/core';
import {DocumentoclienteService} from "../../services/documentocliente.service";

@Component({
  selector: 'app-list-faturamentos',
  templateUrl: './list-faturamentos.component.html',
  styleUrls: ['./list-faturamentos.component.scss']
})
export class ListFaturamentosComponent implements OnInit {

  documentos = [];
  constructor(private service: DocumentoclienteService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.service.getByTipo(3)
      .subscribe(response => {
        this.documentos = response;
      });
  }

}
