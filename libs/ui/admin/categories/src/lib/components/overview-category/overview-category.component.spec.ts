import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCategoryComponent } from './overview.component';

describe('OverviewCategoryComponent', () => {
  let component: OverviewCategoryComponent;
  let fixture: ComponentFixture<OverviewCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
