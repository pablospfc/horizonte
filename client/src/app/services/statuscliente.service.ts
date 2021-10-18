import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {TiposDocumentos} from '../models/tiposdocumentos.model';
import {map} from 'rxjs/operators';
import {StatusCliente} from '../models/statuscliente.model';

@Injectable({
  providedIn: 'root'
})
export class StatusClienteService {

  private readonly api = `${environment.API}/statuscliente`;

  constructor(private http: HttpClient) { }

  public list() {
    return this.http.get<StatusCliente[]>(`${this.api}/listar`)
      .pipe(
        map(data => {
          return data;
        })
      );
  }
}
