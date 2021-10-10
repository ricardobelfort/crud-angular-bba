import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { SubsidiaryService } from './../../../services/subsidiary.service';
import { IBusiness } from './../models/IBusiness';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-subsidiaries-form',
  templateUrl: './subsidiaries-form.component.html',
  styleUrls: ['./subsidiaries-form.component.scss'],
})
export class SubsidiariesFormComponent implements OnInit {
  form: FormGroup;
  subsidiaries: IBusiness[] = [];
  subsidiary: Task;

  types: Type[] = [
    { value: '', viewValue: 'Todos' },
    { value: 'sim', viewValue: 'Sim' },
    { value: 'nao', viewValue: 'Não' },
  ];

  cpf_cnpj: string;

  constructor(
    private fb: FormBuilder,
    private api: SubsidiaryService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      cep: [''],
      logradouro: [''],
      bairro: [''],
      uf: [''],
      localidade: [''],
      name: [''],
      business: [''],
      valuation: [''],
      cnpj: [''],
      value: [''],
    });
  }

  isCPF(): boolean {
    return this.cpf_cnpj == null
      ? true
      : this.cpf_cnpj.length < 12
      ? true
      : false;
  }

  getCpfCnpjMask(): string {
    return this.isCPF() ? '000.000.000-009' : '00.000.000/0000-00';
  }
}
