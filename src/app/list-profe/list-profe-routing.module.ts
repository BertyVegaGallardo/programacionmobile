import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProfePage } from './list-profe.page';

const routes: Routes = [
  {
    path: '',
    component: ListProfePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListProfePageRoutingModule {}
