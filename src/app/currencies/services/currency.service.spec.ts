import { TestBed } from '@angular/core/testing';

import { CurrencyValueService } from './currency.service';

describe('CurrencyService', () => {
  let service: CurrencyValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
