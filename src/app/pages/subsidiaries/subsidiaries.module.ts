import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { SubsidiariesFormComponent } from './subsidiaries-form/subsidiaries-form.component';
import { SubsidiariesListComponent } from './subsidiaries-list/subsidiaries-list.component';
import { SubsidiariesRoutingModule } from './subsidiaries-routing.module';

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
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SubsidiariesModule {}
