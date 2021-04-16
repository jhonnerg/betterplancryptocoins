import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 
import { detail_coins } from '../../model/detail.model';
@Injectable()
export class DetailCoinsService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = environment.baseUrl;
  }
  Detail_coins(id:string): Observable<detail_coins> {
    return this.http.get<any>(this.url + 'coins/'+id);
  }
}