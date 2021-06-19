import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Clientes} from "../models/clientes.model";
import {catchError, map} from "rxjs/operators";
import {Usuario} from "../models/usuario.model";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly api = `${environment.API}/usuarios`;
  constructor(private http: HttpClient) { }

  public list() {
    return this.http.get<any>(`${this.api}/listar`)
      .pipe(
        map(data => {
          return data;
        })
      );
  }

  public getById(id) {
    return this.http.get<any>(`${this.api}/getById/${id}`)
      .pipe(
        map(data => {
          return data;
        })
      );
  }

  public update(usuario) {
    return this.http.put<any>(`${this.api}/atualizar/${usuario.id}`, usuario)
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }
}
