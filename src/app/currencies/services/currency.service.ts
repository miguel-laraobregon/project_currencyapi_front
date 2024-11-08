import { Injectable } from '@angular/core';
import { Currency } from '../models/currency';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {
  
  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  findCurrenciesCode(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.url);
  }

  findCurrenciesValues(currencyCode: string, startDate?: string, endDate?: string, page?: number): Observable<any> {
    let params = new HttpParams();


    if (startDate) {
      params = params.set('finit', startDate);
    }
    if (endDate) {
      params = params.set('fend', endDate);
    }

    if (page) {
      params = params.set('page', page);
    }

    return this.http.get<any>(`${this.url}/${currencyCode}`, { params });
  }
}


