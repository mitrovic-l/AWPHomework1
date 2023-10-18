import { TestBed } from '@angular/core/testing';

import { SentimentanalysisService } from './sentimentanalysis.service';

describe('SentimentanalysisService', () => {
  let service: SentimentanalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentimentanalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
