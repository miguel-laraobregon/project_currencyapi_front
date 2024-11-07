import { Component, OnInit } from '@angular/core';
import { CurrencyValueService } from '../services/currency-value.service';
import { Currency, CurrencyValue } from '../models/currency';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css'
})

export class CurrencyComponent implements OnInit{
  currencies: CurrencyValue[] = [];
  constructor(private service: CurrencyValueService){ }

  ngOnInit(): void{
    this.service.findAll().subscribe( currencies => {
      this.currencies = currencies;
    })
  }
}

@Component({
  selector: 'app-currency-select',
  standalone: true,
  imports: [],
  templateUrl: './currency-select.component.html',
  styleUrl: './currency.component.css'
})
export class CurrencySelectComponent implements OnInit{
  currencies: Currency[] = [];
  constructor(private service: CurrencyService){ }

  ngOnInit(): void{
    this.service.findAllCurrencies().subscribe( currencies => {
      this.currencies = currencies;
    })
  }
}