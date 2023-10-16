import { TestBed } from '@angular/core/testing';

import { LangdetectionService } from './langdetection.service';

describe('LangdetectionService', () => {
  let service: LangdetectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangdetectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
