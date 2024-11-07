import { Injectable } from '@angular/core';
import { Currency } from '../models/currency';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {
  private url: string = 'http://localhost:8080/currencies'
  constructor(private http: HttpClient) { }

  findAllCurrencies(): Observable<Currency[]> {
    // return of(this.currencies);
    return this.http.get<Currency[]>(this.url).pipe(
      map((response:any) => response as Currency[])
    );
  }
}


