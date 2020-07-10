import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectBlockComponent } from './single-project-block.component';

describe('SingleProjectBlockComponent', () => {
  let component: SingleProjectBlockComponent;
  let fixture: ComponentFixture<SingleProjectBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProjectBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProjectBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
