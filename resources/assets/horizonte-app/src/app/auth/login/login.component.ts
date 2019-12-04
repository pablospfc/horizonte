import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {AlertService} from "../../services/alert.service";
import {Usuario} from "../../models/usuario.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;
  constructor(private authService: AuthService,
              private router: Router,
              private alertService: AlertService) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  onSubmit(form: NgForm) {
    return this.authService.login(form.value)
      .subscribe((resp) => {
        this.router.navigate(['home']);
      }, (error) => {
        this.alertService.error(error);
      });
  }
}
