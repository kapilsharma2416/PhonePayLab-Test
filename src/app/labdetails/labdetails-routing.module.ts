import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabdetailsPage } from './labdetails.page';

const routes: Routes = [
  {
    path: '',
    component: LabdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabdetailsPageRoutingModule {}
