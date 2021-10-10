import { IBusiness } from './../pages/subsidiaries/models/IBusiness';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ICep {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor(private http: HttpClient) {}

  // Realiza a busca do CEP na API dos correios.
  searchCep(cep: string): Observable<ICep> {
    return this.http.get<ICep>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
