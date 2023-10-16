import { TestBed } from '@angular/core/testing';

import { TextSimilarityService } from './text-similarity.service';

describe('TextSimilarityService', () => {
  let service: TextSimilarityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextSimilarityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
