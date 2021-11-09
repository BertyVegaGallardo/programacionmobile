import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListProfePageRoutingModule } from './list-profe-routing.module';

import { ListProfePage } from './list-profe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListProfePageRoutingModule
  ],
  declarations: [ListProfePage]
})
export class ListProfePageModule {}
