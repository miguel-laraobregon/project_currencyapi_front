import { Injectable } from '@angular/core';
import { CurrencyValue } from '../models/currency';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyValueService {

  private url: string = 'http://localhost:8080/currencies/all'
  constructor(private http: HttpClient) { }

  findAll(): Observable<CurrencyValue[]> {
    // return of(this.currencies);
    return this.http.get<CurrencyValue[]>(this.url).pipe(
      map((response:any) => response.content as CurrencyValue[])
    );
  }
}
