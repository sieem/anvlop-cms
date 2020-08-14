import { async, TestBed } from '@angular/core/testing';
import { UiAdminProjectModule } from './ui-admin-projects.module';

describe('UiAdminProjectModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiAdminProjectModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiAdminProjectModule).toBeDefined();
  });
});
