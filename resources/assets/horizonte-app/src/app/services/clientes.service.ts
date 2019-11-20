import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {Clientes} from "../models/clientes.model";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly api = `${environment.API}/clientes`;
  constructor(private http: HttpClient) { }

  public list() {
    return this.http.get<Clientes[]>(`${this.api}/listar`)
      .pipe(
        map(data => {
          return data;
        })
      );
  }

  public approve(cliente) {
    return this.http.put(`${this.api}/aprovar/${cliente.id}`,cliente)
      .pipe(
        catchError(error => {
          return throwError(error.error);
        })
      );
  }
}
