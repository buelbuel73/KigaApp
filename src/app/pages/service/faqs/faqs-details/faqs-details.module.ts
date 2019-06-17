import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FaqsDetailsPage } from './faqs-details.page';

const routes: Routes = [
  {
    path: '',
    component: FaqsDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FaqsDetailsPage]
})
export class FaqsDetailsPageModule {}
