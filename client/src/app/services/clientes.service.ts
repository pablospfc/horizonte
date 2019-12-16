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

  public save(cliente) {
    return this.http.post(`${this.api}/cadastrar`, cliente)
      .pipe(
        catchError(error => {
        return throwError(error);
      })
      );
  }

  public listApproved() {
    return this.http.get<Clientes[]>(`${this.api}/listarAprovados`)
      .pipe(
        map(data => {
          return data;
        })
      )
  }

  public toEvaluate(cliente) {
    return this.http.put(`${this.api}/avaliar/${cliente.id}`,cliente)
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }
}
