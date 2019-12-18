import { Component, OnInit } from '@angular/core';
import {DocumentoclienteService} from '../../services/documentocliente.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-list-contratos',
  templateUrl: './list-contratos.component.html',
  styleUrls: ['./list-contratos.component.scss']
})
export class ListContratosComponent implements OnInit {

  documentos = [];
  public page = 1;
  public totalRec: number;
  public loading = false;
  constructor(private documentoService: DocumentoclienteService, private auth: AuthService) { }

  ngOnInit() {
    this.list();
  }

  list() {
  this.loading = true;
  this.documentoService.getByTipo(1, this.auth.getUser().id)
      .subscribe(response => {
        this.documentos = response;
        this.loading = false;
        this.totalRec = this.documentos.length;
      });
  }

  downloadFile(arquivo: string) {
    this.loading = true;
    this.documentoService.download(arquivo)
      .subscribe((res: any) => {
        this.loading = false;
        this.documentoService.handleFile(res, arquivo);
      });
  }

}
