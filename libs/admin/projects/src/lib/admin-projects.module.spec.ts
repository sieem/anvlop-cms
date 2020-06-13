import { async, TestBed } from '@angular/core/testing';
import { AdminProjectsModule } from './admin-projects.module';

describe('AdminProjectsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminProjectsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AdminProjectsModule).toBeDefined();
  });
});
