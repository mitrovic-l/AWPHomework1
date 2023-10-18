import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentanalysisComponent } from './sentimentanalysis.component';

describe('SentimentanalysisComponent', () => {
  let component: SentimentanalysisComponent;
  let fixture: ComponentFixture<SentimentanalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentimentanalysisComponent]
    });
    fixture = TestBed.createComponent(SentimentanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
