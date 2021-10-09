import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubsidiariesRoutingModule } from './subsidiaries-routing.module';
import { SubsidiariesListComponent } from './subsidiaries-list/subsidiaries-list.component';
import { SubsidiariesFormComponent } from './subsidiaries-form/subsidiaries-form.component';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

@NgModule({
  declarations: [SubsidiariesListComponent, SubsidiariesFormComponent],
  imports: [CommonModule, SubsidiariesRoutingModule, AppMaterialModule],
})
export class SubsidiariesModule {}
