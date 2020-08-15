import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsProjectComponent } from './assets.component';

describe('AssetsProjectComponent', () => {
  let component: AssetsProjectComponent;
  let fixture: ComponentFixture<AssetsProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
