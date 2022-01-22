import { Component, OnInit } from '@angular/core';
import {DocumentoclienteService} from '../../services/documentocliente.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-list-parcelamentos',
  templateUrl: './list-parcelamentos.component.html',
  styleUrls: ['./list-parcelamentos.component.scss']
})
export class ListParcelamentosComponent implements OnInit {

  documentos = [];
  public page = 1;
  public totalRec: number;
  public loading = false;
  constructor(private documentoService: DocumentoclienteService, private auth: AuthService) { }

  ngOnInit() {
  }

  list() {
    this.documentoService.getByTipo(9, this.auth.getUser().id)
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
