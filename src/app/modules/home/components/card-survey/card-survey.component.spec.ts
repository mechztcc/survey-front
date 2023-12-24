import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSurveyComponent } from './card-survey.component';

describe('CardSurveyComponent', () => {
  let component: CardSurveyComponent;
  let fixture: ComponentFixture<CardSurveyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSurveyComponent]
    });
    fixture = TestBed.createComponent(CardSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
