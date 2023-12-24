import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagesListComponent } from './advantages-list.component';

describe('AdvantagesListComponent', () => {
  let component: AdvantagesListComponent;
  let fixture: ComponentFixture<AdvantagesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvantagesListComponent]
    });
    fixture = TestBed.createComponent(AdvantagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
