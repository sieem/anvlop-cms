import { async, TestBed } from '@angular/core/testing';
import { AdminProjectModule } from './ui-admin-projects.module';

describe('AdminProjectModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminProjectModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AdminProjectModule).toBeDefined();
  });
});
