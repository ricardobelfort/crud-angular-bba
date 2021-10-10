import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubsidiariesRoutingModule } from './subsidiaries-routing.module';
import { SubsidiariesListComponent } from './subsidiaries-list/subsidiaries-list.component';
import { SubsidiariesFormComponent } from './subsidiaries-form/subsidiaries-form.component';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { CurrencyMaskModule } from 'ng2-currency-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
@NgModule({
  declarations: [SubsidiariesListComponent, SubsidiariesFormComponent],
  imports: [
    CommonModule,
    SubsidiariesRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    CurrencyMaskModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SubsidiariesModule {}
