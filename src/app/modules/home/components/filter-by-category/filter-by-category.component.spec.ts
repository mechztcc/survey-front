import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByCategoryComponent } from './filter-by-category.component';

describe('FilterByCategoryComponent', () => {
  let component: FilterByCategoryComponent;
  let fixture: ComponentFixture<FilterByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterByCategoryComponent]
    });
    fixture = TestBed.createComponent(FilterByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
