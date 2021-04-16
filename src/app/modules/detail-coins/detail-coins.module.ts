import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCoinsRoutingModule } from './detail-coins-routing.module';
import { DetailCoinsComponent } from './page/detail-coins.component';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider'
import {MatButtonModule} from '@angular/material/button' 
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CoreModule } from 'src/app/core/core.module';
@NgModule({
  declarations: [
    DetailCoinsComponent
  ],
  imports: [
    CommonModule,
    DetailCoinsRoutingModule,
    CoreModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ]
})
export class DetailCoinsModule { }
