import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {throwError} from "rxjs";
import {FileUploader} from "ng2-file-upload";

@Injectable({
  providedIn: 'root'
})
export class DocumentoclienteService {

  private readonly api = `${environment.API}/documentoscliente`;
  private headers = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'multipart/form-data'
    })
  };
  constructor(private http: HttpClient) { }

  public list() {
    return this.http.get(`${this.api}/listar`)
      .pipe(
        map(data => {
          return data;
        })
      );
  }

  public save(documentos) {
  //  this.uploader.uploadAll();
    return this.http.post(`${this.api}/cadastrar`, documentos, this.headers)
      .pipe(
        catchError(error => {
          return throwError(error.error);
        })
      );
  }

}
