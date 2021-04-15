import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCoinsComponent } from '../detail-coins/detail-coins.component';
import { ListCoinsComponent } from '../list-coins/list-coins.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { BaseBodyComponent } from './base-body.component';

const routes: Routes = [

  {
    path: '',
    component: BaseBodyComponent,
    children: [
      {
        path: '', redirectTo: 'main', pathMatch: 'full'
      },
      {
        path: 'main',
        loadChildren: () => import('../main-page/main-page.module').then(m => m.MainPageModule),
      },
      {
        path: 'list_coins',
        loadChildren: () => import('../list-coins/list-coins.module').then(m => m.ListCoinsModule),
      },
      {
        path: 'detail_coins/:id',
        loadChildren: () => import('../detail-coins/detail-coins.module').then(m => m.DetailCoinsModule),
      },
      { path: '**', redirectTo: 'main', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseBodyRoutingModule { }
