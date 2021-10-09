import { IBusiness } from './../models/IBusiness';
import { OnInit, Component } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-subsidiaries-list',
  templateUrl: './subsidiaries-list.component.html',
  styleUrls: ['./subsidiaries-list.component.scss'],
})
export class SubsidiariesListComponent implements OnInit {
  subsidiaries: IBusiness[] = [
    {
      id: '1',
      name: 'Itaú BBA',
      business: 'Financial Center',
      valuation: 850000000.5,
      active: true,
      cep: '04538132',
      cnpj: 17298092000130,
    },
    {
      id: '2',
      name: 'Itaú Ceic',
      business: 'Centro Empresárial Itaú',
      valuation: 54000000.45,
      active: true,
      cep: '04344902',
      cnpj: 60701190000104,
    },
    {
      id: '3',
      name: 'Cubo Itaú',
      business: 'Startups Center',
      valuation: 22000000000.2,
      active: true,
      cep: '04547130',
      cnpj: 42267898000109,
    },
    {
      id: '4',
      name: 'Itaú disabled',
      business: 'Polo Fake',
      valuation: 0,
      active: false,
      cep: '07023022',
      cnpj: 28753762000188,
    },
  ];
  displayedColumns: string[] = [
    'name',
    'business',
    'valuation',
    'status',
    'actions',
  ];

  constructor() {}

  ngOnInit(): void {}
}
