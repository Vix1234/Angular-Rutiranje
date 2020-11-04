import { TestBed } from '@angular/core/testing';

import { ServeriService } from './serveri.service';

describe('ServeriService', () => {
  let service: ServeriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
