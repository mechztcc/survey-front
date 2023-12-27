import { TestBed } from '@angular/core/testing';

import { AdvantageListStepsService } from './advantage-list-steps.service';

describe('AdvantageListStepsService', () => {
  let service: AdvantageListStepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvantageListStepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
