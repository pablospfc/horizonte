import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {TiposDocumentos} from "../models/tiposdocumentos.model";

@Injectable({
  providedIn: 'root'
})
export class TiposdocumentosService {

  private readonly api = `${environment.API}/tiposdocumentos`;

  constructor(private http: HttpClient) { }

  public list() {
    return this.http.get<TiposDocumentos[]>(`${this.api}/listar`)
      .pipe(
        map(data => {
          return data;
        })
      );
  }

}
