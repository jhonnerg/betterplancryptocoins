import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCoinsRoutingModule } from './list-coins-routing.module';
import { ListCoinsComponent } from './list-coins.component';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider'
import {MatButtonModule} from '@angular/material/button'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    ListCoinsComponent,
    
  ],
  imports: [
    CommonModule,
    ListCoinsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class ListCoinsModule { }
