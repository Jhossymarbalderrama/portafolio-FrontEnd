import { TestBed } from '@angular/core/testing';

import { EducacionesService } from './educaciones.service';

describe('EducacionesService', () => {
  let service: EducacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
