import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { list_coins_model } from './list-coins.model';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-list-coins',
  templateUrl: './list-coins.component.html',
  styleUrls: ['./list-coins.component.scss']
})
export class ListCoinsComponent implements OnInit {

  public is_loadind: boolean = true;
  List_Coins: list_coins_model[] = [];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.List_coins()
  }

  List_coins() {
    this.service.List_coins().subscribe((data: list_coins_model[]) => {
      this.is_loadind = false;
      this.List_Coins = data;
    })
  }
  RoutelinkDetailCoins(id: any) {
    this.router.navigate(['detail_coins', id])
  }
}
