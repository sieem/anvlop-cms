import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewProjectComponent } from './overview.component';

describe('OverviewProjectComponent', () => {
  let component: OverviewProjectComponent;
  let fixture: ComponentFixture<OverviewProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
