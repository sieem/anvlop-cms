import { async, TestBed } from '@angular/core/testing';
import { UiAdminSettingsModule } from './ui-admin-settings.module';

describe('UiAdminSettingsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiAdminSettingsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiAdminSettingsModule).toBeDefined();
  });
});
