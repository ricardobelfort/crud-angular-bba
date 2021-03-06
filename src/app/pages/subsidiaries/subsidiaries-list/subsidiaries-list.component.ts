import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { SubsidiaryService } from './../../../services/subsidiary.service';
import { IBusiness } from './../models/IBusiness';

@Component({
  selector: 'app-subsidiaries-list',
  templateUrl: './subsidiaries-list.component.html',
  styleUrls: ['./subsidiaries-list.component.scss'],
})
export class SubsidiariesListComponent implements OnInit {
  subsidiaries: IBusiness[];
  data: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'name',
    'business',
    'valuation',
    'status',
    'actions',
  ];

  constructor(
    private api: SubsidiaryService,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.listAllSubsidiaries();
      this.spinner.hide();
    }, 2000);
  }

  // Método para listar todas as tarefas
  listAllSubsidiaries() {
    this.api.getAllSubsidiaries().subscribe(
      (res) => {
        this.toastr.success('Dados carregados com sucesso!');
        this.data = new MatTableDataSource<IBusiness>(res); // Nova instância para pegar o paginator
        this.data.paginator = this.paginator;
        this.subsidiaries = res;
      },
      (err) => {
        this.toastr.error('Ops! Erro ao recuperar dados.', 'Erro');
      }
    );
  }

  // Método de atualizar tarefa
  onEdit(id: number) {
    this.router.navigate(['alterar', id], { relativeTo: this.activedRoute });
  }

  // Método para remover uma tarefa pelo ID
  removeSubsidiary(subsidiary: IBusiness) {
    this.api.deleteSubsidiary(subsidiary.id).subscribe(
      (res) => {
        this.toastr.success('Sede removida com sucesso!', 'Sucesso');
        this.listAllSubsidiaries();
      },
      (err) => {
        this.toastr.error('Ops! Alguma coisa deu errada.', 'Erro');
      }
    );
  }
}
