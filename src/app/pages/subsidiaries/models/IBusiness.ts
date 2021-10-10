import { ICep } from 'src/app/services/cep.service';

export interface IBusiness extends ICep {
  id: number;
  name: string;
  business: string;
  valuation: number;
  cnpj: number;
  active?: boolean;
  cep: string;
}
