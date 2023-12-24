import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByDoneComponent } from './filter-by-done.component';

describe('FilterByDoneComponent', () => {
  let component: FilterByDoneComponent;
  let fixture: ComponentFixture<FilterByDoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterByDoneComponent]
    });
    fixture = TestBed.createComponent(FilterByDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
