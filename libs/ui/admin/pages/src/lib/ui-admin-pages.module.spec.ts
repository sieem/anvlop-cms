import { async, TestBed } from '@angular/core/testing';
import { UiUiAdminPagesModule } from './ui-admin-pages.module';

describe('UiUiAdminPagesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiUiAdminPagesModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiUiAdminPagesModule).toBeDefined();
  });
});
