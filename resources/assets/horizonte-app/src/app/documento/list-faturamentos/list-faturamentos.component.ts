import { Component, OnInit } from '@angular/core';
import {DocumentoclienteService} from '../../services/documentocliente.service';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-list-faturamentos',
  templateUrl: './list-faturamentos.component.html',
  styleUrls: ['./list-faturamentos.component.scss']
})
export class ListFaturamentosComponent implements OnInit {

  documentos = [];
  constructor(private documentoService: DocumentoclienteService, private auth: AuthService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.documentoService.getByTipo(3, this.auth.getUser().id)
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
