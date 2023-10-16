import { TestBed } from '@angular/core/testing';

import { EntityextractionService } from './entityextraction.service';

describe('EntityextractionService', () => {
  let service: EntityextractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityextractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
