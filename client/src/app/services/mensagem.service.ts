import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  private readonly API = `${environment.API}/mensagem`;
  private headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  constructor(private http: HttpClient) { }

  public send(data) {
    return this.http.post<any>(`${this.API}/enviar`, JSON.parse(JSON.stringify(data)), this.headers)
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }
}
