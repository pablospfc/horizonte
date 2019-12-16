import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertService} from "../services/alert.service";
import {Subscription} from "rxjs";
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  alerts: any[] = [];
  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.subscription = this.alertService.getAlert()
      .subscribe(message => {
        this.alerts.push(message);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClosed(dismissedAlert: AlertComponent): void {
    //this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
