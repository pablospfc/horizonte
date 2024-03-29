import {EventEmitter, Injectable} from '@angular/core';
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  invokeFirstComponentFunction = new EventEmitter();
  subsVar: Subscription;
  constructor() { }

  callMethodList() {
    this.invokeFirstComponentFunction.emit();
  }
}
