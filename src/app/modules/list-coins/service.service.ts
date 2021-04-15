import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { list_coins_model } from './list-coins.model';
@Injectable()
export class ServiceService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = environment.baseUrl;
  }
  List_coins(): Observable<list_coins_model[]> {
    return this.http.get<any>(this.url + 'coins/list');
  }
}