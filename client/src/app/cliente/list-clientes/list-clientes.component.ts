import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClientesService} from "../../services/clientes.service";
import {Clientes} from "../../models/clientes.model";
import {Subject} from "rxjs";
import {DataTableDirective} from "angular-datatables";

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.scss']
})
export class ListClientesComponent implements OnInit, OnDestroy {

  public clientes = [];
  public loading = false;
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.listar();
  }

  listar() {
    this.loading = true;
    this.clientesService.list()
      .subscribe(response => {
        this.loading = false;
        this.clientes = response;
      });
  }

  avaliar(cliente) {
    this.loading = true;
    this.clientesService.toEvaluate(cliente)
      .subscribe(response => {
        this.loading = false;
        this.listar();
      }, error => {

        });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

}
