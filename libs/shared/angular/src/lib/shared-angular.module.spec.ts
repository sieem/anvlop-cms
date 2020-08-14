import { async, TestBed } from '@angular/core/testing';
import { SharedAngularModule } from './shared-angular.module';

describe('SharedAngularModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedAngularModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedAngularModule).toBeDefined();
  });
});
