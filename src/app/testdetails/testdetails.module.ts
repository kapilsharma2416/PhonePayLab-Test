import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestdetailsPageRoutingModule } from './testdetails-routing.module';

import { TestdetailsPage } from './testdetails.page';
import { FooterPage } from '../footer/footer.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestdetailsPageRoutingModule,
    FooterPageModule
  ],
  declarations: [TestdetailsPage],
  exports: [FooterPage]
})
export class TestdetailsPageModule {}
