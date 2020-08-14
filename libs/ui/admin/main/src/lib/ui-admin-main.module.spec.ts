import { async, TestBed } from '@angular/core/testing';
import { UiAdminMainModule } from './ui-admin-main.module';

describe('UiAdminMainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiAdminMainModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiAdminMainModule).toBeDefined();
  });
});
