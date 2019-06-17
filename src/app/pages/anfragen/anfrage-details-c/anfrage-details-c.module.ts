import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnfrageDetailsCPage } from './anfrage-details-c.page';

const routes: Routes = [
  {
    path: '',
    component: AnfrageDetailsCPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnfrageDetailsCPage]
})
export class AnfrageDetailsCPageModule {}
