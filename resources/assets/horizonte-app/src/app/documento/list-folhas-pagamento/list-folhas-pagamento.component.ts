import { Component, OnInit } from '@angular/core';
import {DocumentoclienteService} from "../../services/documentocliente.service";

@Component({
  selector: 'app-list-folhas-pagamento',
  templateUrl: './list-folhas-pagamento.component.html',
  styleUrls: ['./list-folhas-pagamento.component.scss']
})
export class ListFolhasPagamentoComponent implements OnInit {

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
