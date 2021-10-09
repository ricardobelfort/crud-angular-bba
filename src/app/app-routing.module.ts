import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'sedes' },
  {
    path: 'sedes',
    loadChildren: () =>
      import('./pages/subsidiaries/subsidiaries.module').then(
        (m) => m.SubsidiariesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
