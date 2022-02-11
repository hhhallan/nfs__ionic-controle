import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavlistPageRoutingModule } from './favlist-routing.module';

import { FavlistPage } from './favlist.page';
import {SharedModule} from "../../modules/shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FavlistPageRoutingModule,
        SharedModule
    ],
  declarations: [FavlistPage]
})
export class FavlistPageModule {}
