import { Component, OnInit } from '@angular/core';
import {DocumentoclienteService} from "../../services/documentocliente.service";

@Component({
  selector: 'app-list-declaracoes',
  templateUrl: './list-declaracoes.component.html',
  styleUrls: ['./list-declaracoes.component.scss']
})
export class ListDeclaracoesComponent implements OnInit {

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
