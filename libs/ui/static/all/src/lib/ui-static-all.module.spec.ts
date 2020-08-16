import { async, TestBed } from '@angular/core/testing';
import { UiStaticAllModule } from './ui-static-all.module';

describe('UiStaticAllModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiStaticAllModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiStaticAllModule).toBeDefined();
  });
});
