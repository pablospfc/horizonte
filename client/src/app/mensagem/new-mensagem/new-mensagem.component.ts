import { Component, OnInit } from '@angular/core';
import {Mensagem} from "../../models/mensagem.model";
import {NgForm} from "@angular/forms";
import {MensagemService} from "../../services/mensagem.service";
import {AlertService} from "../../services/alert.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-new-mensagem',
  templateUrl: './new-mensagem.component.html',
  styleUrls: ['./new-mensagem.component.scss']
})
export class NewMensagemComponent implements OnInit {

  mensagem: Mensagem;
  public loading: boolean;
  constructor(private mensagemService: MensagemService,
              private alertService: AlertService,
              private auth: AuthService) { }

  ngOnInit() {
    this.mensagem = new Mensagem();
  }

  onSubmit(form: NgForm) {
    this.loading = true;
    form.value.from_name = this.auth.getUser().name;
    form.value.from = this.auth.getUser().email;
    this.mensagemService.send(form.value)
      .subscribe(response => {
        this.alertService.success(response.message);
        this.loading = false;
      }, error => {
        this.alertService.error(error.message);
        this.loading = false;
      });
  }

}
