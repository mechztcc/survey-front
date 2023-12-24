import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsSurveyComponent } from './trends-survey.component';

describe('TrendsSurveyComponent', () => {
  let component: TrendsSurveyComponent;
  let fixture: ComponentFixture<TrendsSurveyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendsSurveyComponent]
    });
    fixture = TestBed.createComponent(TrendsSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
