import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlllabsPage } from './alllabs.page';

const routes: Routes = [
  {
    path: '',
    component: AlllabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlllabsPageRoutingModule {}
