import { async, TestBed } from '@angular/core/testing';
import { UiStaticHomeModule } from './ui-static-home.module';

describe('UiStaticHomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiStaticHomeModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiStaticHomeModule).toBeDefined();
  });
});
