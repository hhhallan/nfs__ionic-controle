import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavlistPageRoutingModule } from './favlist-routing.module';

import { FavlistPage } from './favlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavlistPageRoutingModule
  ],
  declarations: [FavlistPage]
})
export class FavlistPageModule {}
