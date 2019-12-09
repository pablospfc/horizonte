import { Component, OnInit } from '@angular/core';
import {DocumentoclienteService} from "../../services/documentocliente.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-list-declaracoes',
  templateUrl: './list-declaracoes.component.html',
  styleUrls: ['./list-declaracoes.component.scss']
})
export class ListDeclaracoesComponent implements OnInit {

  documentos = [];
  constructor(private documentoService: DocumentoclienteService, private auth: AuthService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.documentoService.getByTipo(7, this.auth.getUser().id)
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
