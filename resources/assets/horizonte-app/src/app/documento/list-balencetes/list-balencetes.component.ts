import { Component, OnInit } from '@angular/core';
import {DocumentoclienteService} from "../../services/documentocliente.service";

@Component({
  selector: 'app-list-balencetes',
  templateUrl: './list-balencetes.component.html',
  styleUrls: ['./list-balencetes.component.scss']
})
export class ListBalencetesComponent implements OnInit {

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
