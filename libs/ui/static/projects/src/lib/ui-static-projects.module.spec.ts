import { async, TestBed } from '@angular/core/testing';
import { UiStaticProjectsModule } from './ui-static-projects.module';

describe('UiStaticProjectsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiStaticProjectsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiStaticProjectsModule).toBeDefined();
  });
});
