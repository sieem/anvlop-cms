import { async, TestBed } from '@angular/core/testing';
import { UiStaticServicesModule } from './ui-static-services.module';

describe('UiStaticServicesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiStaticServicesModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiStaticServicesModule).toBeDefined();
  });
});
