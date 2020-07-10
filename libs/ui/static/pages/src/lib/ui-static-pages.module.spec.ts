import { async, TestBed } from '@angular/core/testing';
import { UiStaticPagesModule } from './ui-static-pages.module';

describe('UiStaticPagesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiStaticPagesModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiStaticPagesModule).toBeDefined();
  });
});
