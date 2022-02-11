import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavlistPage } from './favlist.page';

const routes: Routes = [
  {
    path: '',
    component: FavlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavlistPageRoutingModule {}
