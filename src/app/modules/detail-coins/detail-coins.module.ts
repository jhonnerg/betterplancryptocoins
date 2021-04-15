import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCoinsRoutingModule } from './detail-coins-routing.module';
import { DetailCoinsComponent } from './detail-coins.component';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider'
import {MatButtonModule} from '@angular/material/button'
import { ServiceService } from './service.service';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    DetailCoinsComponent
  ],
  imports: [
    CommonModule,
    DetailCoinsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  providers:[
    ServiceService
  ]
})
export class DetailCoinsModule { }
