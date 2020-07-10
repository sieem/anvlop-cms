import { async, TestBed } from '@angular/core/testing';
import { UiStaticBlocksModule } from './ui-static-blocks.module';

describe('UiStaticBlocksModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiStaticBlocksModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiStaticBlocksModule).toBeDefined();
  });
});
