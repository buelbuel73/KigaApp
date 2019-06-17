import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnfrageDetailsAPage } from './anfrage-details-a.page';

const routes: Routes = [
  {
    path: '',
    component: AnfrageDetailsAPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnfrageDetailsAPage]
})
export class AnfrageDetailsAPageModule {}
