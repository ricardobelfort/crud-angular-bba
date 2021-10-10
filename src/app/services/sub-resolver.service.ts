import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { of } from 'rxjs';

import { IBusiness } from './../pages/subsidiaries/models/IBusiness';
import { SubsidiaryService } from './subsidiary.service';

@Injectable({
  providedIn: 'root',
})
export class SubResolverService implements Resolve<IBusiness> {
  constructor(private api: SubsidiaryService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IBusiness> {
    if (route.params && route.params['id']) {
      return this.api.getSubsidiaryById(route.params['id']);
    }

    return of({
      id: null,
      name: null,
      business: null,
      valuation: null,
      cnpj: null,
      active: null,
      cep: null,
      logradouro: null,
      bairro: null,
      uf: null,
      localidade: null,
    });
  }
}
