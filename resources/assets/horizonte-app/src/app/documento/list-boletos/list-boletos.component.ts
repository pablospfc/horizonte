import { Component, OnInit } from '@angular/core';
import {DocumentoclienteService} from "../../services/documentocliente.service";

@Component({
  selector: 'app-list-boletos',
  templateUrl: './list-boletos.component.html',
  styleUrls: ['./list-boletos.component.scss']
})
export class ListBoletosComponent implements OnInit {

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
