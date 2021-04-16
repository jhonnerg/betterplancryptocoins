import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCoinsService } from './service/List-coins/ListCoinsService.service';
import { DetailCoinsService } from './service/Detail-coins/DetailCoinsService.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],providers:[
    ListCoinsService,
    DetailCoinsService
  ]
})
export class CoreModule { }
