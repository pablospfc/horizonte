import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UsuariosService} from "../../services/usuarios.service";
import {AlertService} from "../../services/alert.service";
import {Usuario} from "../../models/usuario.model";
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-update-usuario-modal',
  templateUrl: './update-usuario-modal.component.html',
  styleUrls: ['./update-usuario-modal.component.scss']
})
export class UpdateUsuarioModalComponent implements OnInit {

  @Input() id: number;
  public loading;
  usuario: Usuario;
  constructor(private usuariosService: UsuariosService,
              private modalRef: BsModalRef,
              private alertService: AlertService) { }

  ngOnInit() {
    this.usuario = new Usuario();
    if (this.id) {
      this.buscar(this.id);
    }
  }

  onSubmit(form: NgForm) {
    this.loading = true;
    this.usuariosService.update(form.value)
      .subscribe(response => {
        this.alertService.success(response.message);
        this.loading = false;
      }, error => {
        this.alertService.error(error.message);
        console.log(error);
        this.loading = false;
      });
  }

  close() {
    this.modalRef.hide();
  }

  // get data by id
  buscar(id: number) {
    this.loading = true;
    this.usuariosService.getById(id)
      .subscribe(response => {
        this.usuario = response;
        this.loading = false;
      });
  }

}
