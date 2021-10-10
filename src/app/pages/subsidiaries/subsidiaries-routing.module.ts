import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubResolverService } from 'src/app/services/sub-resolver.service';

import { SubsidiariesFormComponent } from './subsidiaries-form/subsidiaries-form.component';
import { SubsidiariesListComponent } from './subsidiaries-list/subsidiaries-list.component';

const routes: Routes = [
  { path: '', component: SubsidiariesListComponent },
  {
    path: 'novo',
    component: SubsidiariesFormComponent,
    resolve: { subsidiary: SubResolverService },
  },
  {
    path: 'alterar/:id',
    component: SubsidiariesFormComponent,
    resolve: { subsidiary: SubResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubsidiariesRoutingModule {}
