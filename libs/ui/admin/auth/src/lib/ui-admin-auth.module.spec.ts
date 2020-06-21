import { async, TestBed } from '@angular/core/testing';
import { UiAdminAuthModule } from './ui-admin-auth.module';

describe('UiAdminAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiAdminAuthModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiAdminAuthModule).toBeDefined();
  });
});
