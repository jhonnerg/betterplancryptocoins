import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseBodyRoutingModule } from './base-body-routing.module';
import { BaseBodyComponent } from './page/base-body.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    BaseBodyComponent,
  ],
  imports: [
    CommonModule,
    BaseBodyRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule
  ]
})
export class BaseBodyModule { }
