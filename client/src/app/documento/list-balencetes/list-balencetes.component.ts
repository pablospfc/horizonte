import { Component, OnInit } from '@angular/core';
import {DocumentoclienteService} from "../../services/documentocliente.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-list-balencetes',
  templateUrl: './list-balencetes.component.html',
  styleUrls: ['./list-balencetes.component.scss']
})
export class ListBalencetesComponent implements OnInit {

  documentos = [];
  constructor(private documentoService: DocumentoclienteService, private auth: AuthService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.documentoService.getByTipo(6, this.auth.getUser().id)
      .subscribe(response => {
        this.documentos = response;
      });
  }

  downloadFile(arquivo: string) {
    this.documentoService.download(arquivo)
      .subscribe((res: any) => {
        this.documentoService.handleFile(res, arquivo);
      });
  }

}
