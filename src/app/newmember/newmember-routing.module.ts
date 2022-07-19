import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewmemberPage } from './newmember.page';

const routes: Routes = [
  {
    path: '',
    component: NewmemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewmemberPageRoutingModule {}
