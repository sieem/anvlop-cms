import { async, TestBed } from '@angular/core/testing';
import { UiAdminCategoriesModule } from './ui-admin-categories.module';

describe('UiAdminCategoriesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiAdminCategoriesModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiAdminCategoriesModule).toBeDefined();
  });
});
