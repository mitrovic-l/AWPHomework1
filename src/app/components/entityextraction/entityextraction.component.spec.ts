import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityextractionComponent } from './entityextraction.component';

describe('EntityextractionComponent', () => {
  let component: EntityextractionComponent;
  let fixture: ComponentFixture<EntityextractionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntityextractionComponent]
    });
    fixture = TestBed.createComponent(EntityextractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
