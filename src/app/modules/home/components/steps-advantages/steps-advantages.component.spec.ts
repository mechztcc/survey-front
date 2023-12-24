import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsAdvantagesComponent } from './steps-advantages.component';

describe('StepsAdvantagesComponent', () => {
  let component: StepsAdvantagesComponent;
  let fixture: ComponentFixture<StepsAdvantagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepsAdvantagesComponent]
    });
    fixture = TestBed.createComponent(StepsAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
