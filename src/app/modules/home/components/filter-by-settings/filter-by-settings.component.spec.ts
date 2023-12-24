import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBySettingsComponent } from './filter-by-settings.component';

describe('FilterBySettingsComponent', () => {
  let component: FilterBySettingsComponent;
  let fixture: ComponentFixture<FilterBySettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterBySettingsComponent]
    });
    fixture = TestBed.createComponent(FilterBySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
