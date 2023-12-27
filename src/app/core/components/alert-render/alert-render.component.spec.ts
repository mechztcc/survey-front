import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertRenderComponent } from './alert-render.component';

describe('AlertRenderComponent', () => {
  let component: AlertRenderComponent;
  let fixture: ComponentFixture<AlertRenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertRenderComponent]
    });
    fixture = TestBed.createComponent(AlertRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
