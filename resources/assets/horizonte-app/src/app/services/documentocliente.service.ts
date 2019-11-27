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
    return this.http.get<any>(`${this.api}/listar`)
      .pipe(
        map(data => {
          return data;
        })
      );
  }

  public download(arquivo: string) {
    return this.http.get(`${this.api}/download/${arquivo}`, {
      responseType: 'blob' as 'json'
      // reportProgress
      // content-length
    });
  }

  public handleFile(res: any, fileName: string) {
    const file = new Blob([res], {
      type: res.type
    });

    // IE
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(file);
      return;
    }

    const blob = window.URL.createObjectURL(file);

    const link = document.createElement('a');
    link.href = blob;
    link.download = fileName;

    // link.click();
    link.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    }));

    setTimeout(() => { // firefox
      window.URL.revokeObjectURL(blob);
      link.remove();
    }, 100);
  }

  public save(documentos) {
  //  this.uploader.uploadAll();
    return this.http.post(`${this.api}/cadastrar`, documentos)
      .pipe(
        catchError(error => {
          return throwError(error.error);
        })
      );
  }

}
