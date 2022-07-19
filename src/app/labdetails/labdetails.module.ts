import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabdetailsPageRoutingModule } from './labdetails-routing.module';

import { LabdetailsPage } from './labdetails.page';
import { FooterPageModule } from '../footer/footer.module';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabdetailsPageRoutingModule,
    FooterPageModule
  ],
  declarations: [LabdetailsPage],
  exports: [FooterPage]
})
export class LabdetailsPageModule {}
