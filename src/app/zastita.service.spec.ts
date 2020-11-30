import { TestBed } from '@angular/core/testing';

import { ZastitaService } from './zastita.service';

describe('ZastitaService', () => {
  let service: ZastitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZastitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
