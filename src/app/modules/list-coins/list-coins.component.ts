import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { list_coins_model } from './list-coins.model';
import { ServiceService } from './service.service';
import * as $ from "jquery";
@Component({
	selector: 'app-list-coins',
	templateUrl: './list-coins.component.html',
	styleUrls: ['./list-coins.component.scss'],
})
export class ListCoinsComponent implements OnInit {
	public is_loadind: boolean = true;
	public is_loadind_data: boolean = false;
	public search_data: string = '';
	List_Coins: list_coins_model[] = [];
	List_Coins_Temp: list_coins_model[] = [];
	List_Coins_filter: list_coins_model[] = [];
	List_Coins_scroll: list_coins_model[] = [];
	event_bool: boolean = false;
	index_initial = 0;
	Size = 10;

	@HostListener('scroll', ['$event'])
	onScroll(event: any) { 
		if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
			this.ScrollPushData();
		}
	}

	constructor(private service: ServiceService, private router: Router) { }

	ngOnInit(): void {
		this.List_coins();
	}

	List_coins() {
		this.service.List_coins().subscribe((data: list_coins_model[]) => {
			this.is_loadind = false;
			this.List_Coins = data;
			this.ScrollPushData();
		});
	}

	ScrollPushData() {
		if (this.search_data == '') {
			this.is_loadind_data = true;
			setTimeout(() => {
				for (let index = this.index_initial; index < this.Size; index++) {
					const element = this.List_Coins[index];
					this.List_Coins_scroll.push(element);
				}
				this.List_Coins_Temp = this.List_Coins_scroll;
				this.index_initial += 10;
				this.Size += 10;
				this.is_loadind_data = false;
			}, 1500);
		}
	}

	RoutelinkDetailCoins(id: any) {
		this.router.navigate(['detail_coins', id]);
	}

	searchData(searchValue: any) {
		if (this.search_data != '') {
			this.List_Coins_filter = this.List_Coins.filter((item: list_coins_model) => {

				return item.name.toLowerCase().includes(this.search_data.toLowerCase());
			});
			this.List_Coins_Temp = this.List_Coins_filter;
		} else {
			this.List_Coins_Temp = this.List_Coins_scroll;
		}
	} 
}
