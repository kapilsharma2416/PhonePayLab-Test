import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestdetailsPage } from './testdetails.page';

const routes: Routes = [
  {
    path: '',
    component: TestdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestdetailsPageRoutingModule {}
