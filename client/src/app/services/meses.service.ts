import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Meses} from "../models/meses.model";

@Injectable({
  providedIn: 'root'
})
export class MesesService {

  private readonly api = `${environment.API}/meses`;
  constructor(private http: HttpClient) { }

  public list(){
    return this.http.get<Meses[]>(`${this.api}/listar`)
      .pipe(
        map(data => {
          return data;
        })
      )
  }
}
