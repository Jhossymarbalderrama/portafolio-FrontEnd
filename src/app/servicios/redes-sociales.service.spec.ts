import { TestBed } from '@angular/core/testing';

import { RedesSocialesService } from './redes-sociales.service';

describe('RedesSocialesService', () => {
  let service: RedesSocialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedesSocialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
