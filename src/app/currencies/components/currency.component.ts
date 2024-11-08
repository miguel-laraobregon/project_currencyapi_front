import { Component, OnInit } from '@angular/core';
import { Currency, CurrencyValue } from '../models/currency';
import { CurrencyService } from '../services/currency.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css'
})
export class CurrencyComponent implements OnInit{
  currencies: Currency[] = [];
  selectedCurrency: string = 'all';
  startDate: string = '';
  endDate: string = '';
  currencyValues: CurrencyValue[] = [];
  totalPages: number = 1;
  currentPage: number = 0;
  totalElements: number = 0;

  constructor(private currencyService: CurrencyService){ }

  ngOnInit(): void{
    // Obtiene valores de divisas para selector
    this.currencyService.findCurrenciesCode().subscribe(currencies => {
      this.currencies = currencies;
    });

    // Mandamos llamar funcion para obtener de inicio todas las divisas
    this.currencyService.findCurrenciesValues('all').subscribe(response => {
      // Definimos propiedades con valores obtenidos en respuesta
      this.currencyValues = response.content;
      this.totalPages = response.page.totalPages;
      this.currentPage = response.page.number;
      this.totalElements = response.page.totalElements;
    });

  }

  onSearch(): void {
    // Obtenemos los valores de los inputs (divisa, fechas)
    const currencyCode = this.selectedCurrency;
    const startDate = this.startDate ? new Date(this.startDate).toISOString() : '';
    const endDate = this.endDate ? new Date(this.endDate).toISOString() : '';

    // Mandamos llamar funcion para obtener resultados de divisas con los parámetros seleccionados
    this.currencyService.findCurrenciesValues(currencyCode, startDate, endDate).subscribe(response => {
      // Definimos propiedades con valores obtenidos en respuesta
      this.currencyValues = response.content;
      this.totalPages = response.page.totalPages;
      this.currentPage = response.page.number;
      this.totalElements = response.page.totalElements;
    });
  }

  onPageChange(page: number): void {
    // Obtenemos los valores de los inputs (divisa, fechas)
    const currencyCode = this.selectedCurrency;
    const startDate = this.startDate ? new Date(this.startDate).toISOString() : '';
    const endDate = this.endDate ? new Date(this.endDate).toISOString() : '';

    // Validamos el valor de pagina
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      // Mandamos llamar funcion para obtener resultados de divisas con los parámetros seleccionados y pagina
      this.currencyService.findCurrenciesValues(currencyCode, startDate, endDate, this.currentPage)
        .subscribe(response => {
          this.currencyValues = response.content;
          this.totalPages = response.page.totalPages;
        });
    }
  }
  

}