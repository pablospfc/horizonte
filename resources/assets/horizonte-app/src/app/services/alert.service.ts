import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {NavigationStart, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<any>();
  constructor() {

  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  public success(message: string) {
    this.subject.next( {
      type: 'success',
      text: message,
      dismissible: true,
      timeout: 5000
    });
  }

  public error(message: string) {
    this.subject.next( {
      type: 'danger',
      text: message,
      dismissible: true,
      timeout: 5000
    });
  }

}
