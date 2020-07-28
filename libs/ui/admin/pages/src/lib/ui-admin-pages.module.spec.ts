import { async, TestBed } from '@angular/core/testing';
import { UiAdminPagesModule } from './ui-admin-pages.module';

describe('UiAdminPagesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiAdminPagesModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiAdminPagesModule).toBeDefined();
  });
});
