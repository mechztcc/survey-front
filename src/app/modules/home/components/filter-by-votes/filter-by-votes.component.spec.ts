import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByVotesComponent } from './filter-by-votes.component';

describe('FilterByVotesComponent', () => {
  let component: FilterByVotesComponent;
  let fixture: ComponentFixture<FilterByVotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterByVotesComponent]
    });
    fixture = TestBed.createComponent(FilterByVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
