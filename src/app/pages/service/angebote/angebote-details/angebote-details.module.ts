import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AngeboteDetailsPage } from './angebote-details.page';

const routes: Routes = [
  {
    path: '',
    component: AngeboteDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AngeboteDetailsPage]
})
export class AngeboteDetailsPageModule {}
