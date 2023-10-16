import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangdetectionComponent } from './langdetection.component';

describe('LangdetectionComponent', () => {
  let component: LangdetectionComponent;
  let fixture: ComponentFixture<LangdetectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LangdetectionComponent]
    });
    fixture = TestBed.createComponent(LangdetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
