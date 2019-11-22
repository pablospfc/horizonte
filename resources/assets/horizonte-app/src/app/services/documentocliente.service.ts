import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DocumentoclienteService {

  private readonly api = `${environment.API}/documentoscliente`;

  constructor(private http: HttpClient) { }

  public list() {
    return this.http.get(`${this.api}/listar`)
      .pipe(
        map(data => {
          return data;
        })
      );
  }

}
