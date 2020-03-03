import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  private readonly API = `${environment.API}/documentos`;
  constructor(private http: HttpClient) { }

  public getByTipo(id) {
    return this.http.get<any>(`${this.API}/getByTipo/${id}`)
      .pipe(
        map( data => {
          return data;
        })
      );
  }
}
