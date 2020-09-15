import { async, TestBed } from '@angular/core/testing';
import { UiAdminSharedModule } from './ui-admin-shared.module';

describe('UiAdminSharedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiAdminSharedModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiAdminSharedModule).toBeDefined();
  });
});
