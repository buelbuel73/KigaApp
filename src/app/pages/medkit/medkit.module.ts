import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MedkitPage } from './medkit.page';

import { MomentModule } from 'ngx-moment';

const routes: Routes = [
  {
    path: '',
    component: MedkitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MomentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MedkitPage]
})
export class MedkitPageModule {}
