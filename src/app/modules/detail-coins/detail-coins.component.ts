import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { detail_coins } from './detail.model';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-detail-coins',
  templateUrl: './detail-coins.component.html',
  styleUrls: ['./detail-coins.component.scss']
})
export class DetailCoinsComponent implements OnInit {
  public is_loadind: boolean = true;
  public id_coin: any = '';
  public Detail_id: detail_coins = new detail_coins();

  constructor(private route: ActivatedRoute, private service: ServiceService, private location: Location) { }

  ngOnInit(): void {
    this.id_coin = this.route.snapshot.paramMap.get('id');
    this.Detail_coins();
  }
  Detail_coins() {
    this.service.Detail_coins(this.id_coin).subscribe(data => {
      this.is_loadind = false;
      this.Detail_id = data;
    }, err => {
      this.back();
    })
  }

  back() {
    this.location.back();
  }
}
