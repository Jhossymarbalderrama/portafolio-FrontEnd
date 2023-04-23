import { TestBed } from '@angular/core/testing';

import { HardSoftSkillsService } from './hard-soft-skills.service';

describe('HardSoftSkillsService', () => {
  let service: HardSoftSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardSoftSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
