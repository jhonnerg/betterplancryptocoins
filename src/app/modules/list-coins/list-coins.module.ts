import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCoinsRoutingModule } from './list-coins-routing.module';
import { ListCoinsComponent } from './page/list-coins.component';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider'
import {MatButtonModule} from '@angular/material/button'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
@NgModule({
  declarations: [
    ListCoinsComponent,
    
  ],
  imports: [
    CommonModule,
    CoreModule,
    ListCoinsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class ListCoinsModule { }
