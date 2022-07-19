import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlllabsPageRoutingModule } from './alllabs-routing.module';

import { AlllabsPage } from './alllabs.page';
import { FooterPageModule } from '../footer/footer.module';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlllabsPageRoutingModule,
    FooterPageModule
  ],
  declarations: [AlllabsPage],
  exports: [FooterPage]
})
export class AlllabsPageModule {}
