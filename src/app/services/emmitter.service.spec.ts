import { TestBed } from '@angular/core/testing';

import { EmmitterService } from './emmitter.service';

describe('EmmitterService', () => {
  let service: EmmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
