import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CepService } from 'src/app/services/cep.service';

import { SubsidiaryService } from './../../../services/subsidiary.service';
import { IBusiness } from './../models/IBusiness';

@Component({
  selector: 'app-subsidiaries-form',
  templateUrl: './subsidiaries-form.component.html',
  styleUrls: ['./subsidiaries-form.component.scss'],
})
export class SubsidiariesFormComponent implements OnInit {
  form: FormGroup;
  subsidiaries: IBusiness[] = [];
  subsidiary: IBusiness;
  selected = true;

  constructor(
    private fb: FormBuilder,
    private api: SubsidiaryService,
    private cep: CepService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.spinner.show();

    this.subsidiary = this.activatedRoute.snapshot.data['subsidiary'];

    this.form = this.fb.group({
      id: [this.subsidiary.id],
      name: [
        this.subsidiary.name,
        [Validators.required, Validators.minLength(3)],
      ],
      business: [
        this.subsidiary.business,
        [Validators.required, Validators.minLength(3)],
      ],
      valuation: [
        this.subsidiary.valuation,
        [Validators.required, Validators.minLength(2)],
      ],
      cnpj: [
        this.subsidiary.cnpj,
        [Validators.required, Validators.maxLength(18)],
      ],
      active: [this.subsidiary.active, Validators.required],
      cep: [
        this.subsidiary.cep,
        [Validators.required, Validators.minLength(8)],
      ],
      logradouro: [
        this.subsidiary.logradouro,
        [Validators.required, Validators.minLength(3)],
      ],
      bairro: [this.subsidiary.bairro, Validators.required],
      uf: [
        this.subsidiary.uf,
        [Validators.required, Validators.minLength(1), Validators.maxLength(2)],
      ],
      localidade: [this.subsidiary.localidade, Validators.required],
    });

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }

  consultaCEP() {
    let cep = this.form.get('cep').value;

    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    // Verifica se o campo cep possui valor informado
    if (cep != '') {
      // Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.resetForm();
        this.cep.searchCep(cep).subscribe((res) => {
          this.fillForm(res);
        });
      }
    }
  }

  // Popula os campos do formulário referente ao CEP.
  fillForm(res) {
    this.form.patchValue({
      cep: res.cep,
      logradouro: res.logradouro,
      bairro: res.bairro,
      uf: res.uf,
      localidade: res.localidade,
    });
  }

  // Limpa os campos do formulário
  resetForm() {
    this.form.patchValue({
      cep: null,
      logradouro: null,
      bairro: null,
      uf: null,
      localidade: null,
    });
  }

  // Método para criar ou editar subsidiária
  addSubsidiary() {
    if (this.form.valid) {
      if (this.form.value.id) {
        this.api.updateSubsidiary(this.form.value).subscribe(
          (res) => {
            this.toastr.success('Subsidiária atualizada com sucesso!');
            this.form.reset();
            this.router.navigate(['/']);
            this.listAllTasks();
          },
          (err) => {
            this.toastr.error('Ops! Erro ao atualizar a item.');
          }
        );
      } else {
        this.api.createSubsidiary(this.form.value).subscribe(
          (res) => {
            console.log(this.form.value);
            this.toastr.success('Subsidiária criada com sucesso!');
            this.form.reset();
            this.router.navigate(['/']);
            this.listAllTasks();
          },
          (err) => {
            this.toastr.error('Ops! Erro ao adicionar um novo item.');
          }
        );
      }
    }
  }

  // Método para listar todas as sedes
  listAllTasks() {
    this.api.getAllSubsidiaries().subscribe(
      (res) => {
        this.subsidiaries = res;
      },
      (err) => {
        this.toastr.error('Ops! Erro ao recuperar dados.', 'Erro');
      }
    );
  }

  // Método para cancelar e voltar a lista
  cancelTask() {
    this.form.reset();
    this.router.navigate(['/']);
  }
}
