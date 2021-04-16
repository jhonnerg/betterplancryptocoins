import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCoinsComponent } from './page/detail-coins.component';

const routes: Routes = [
  {
    path:'',
    component:DetailCoinsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailCoinsRoutingModule { }
