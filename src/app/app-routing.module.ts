import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/base-body/base-body.module').then(m => m.BaseBodyModule) }, 
  { path: '**', redirectTo: '', pathMatch: 'full' },
]

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
