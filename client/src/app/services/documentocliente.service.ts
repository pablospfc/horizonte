import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {throwError} from "rxjs";
import {FileUploader} from "ng2-file-upload";
import {DocumentosCliente} from "../models/documentoscliente.model";

@Injectable({
  providedIn: 'root'
})
export class DocumentoclienteService {

  private readonly api = `${environment.API}/documentoscliente`;
  private headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'multipart/form-data'
    })
  };

  constructor(private http: HttpClient) {
  }

  public list(dados, setor) {
    return this.http.post<any>(`${this.api}/listar/${setor}`, dados)
      .pipe(
        map(data => {
          return data;
        })
      );
  }

  public getById(id) {
    return this.http.get<DocumentosCliente>(`${this.api}/getById/${id}`)
      .pipe(
        map(data => {
          return data[0];
        })
      );
  }

  public getByTipo(id, user) {
    return this.http.get<DocumentosCliente[]>(`${this.api}/getByTipo/${id}/${user}`)
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

  public save(documento) {
    if (documento.get('id')) {
      return this.update(documento);
    } else {
      return this.create(documento);
    }

  }

  private create(documento) {
    return this.http.post(`${this.api}/cadastrar`, documento)
      .pipe(
        catchError(error => {
          return throwError(error.error);
        })
      );
  }

  private update(documento) {
    /*
    documento.forEach((value,key) => {
      console.log(key+" "+value)
    });
    */
    return this.http.post(`${this.api}/atualizar/${documento.get('id')}`, documento)
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }

  public remove(id: number) {
    return this.http.delete(`${this.api}/excluir/${id}`)
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }

}
