import { TestBed } from '@angular/core/testing';

import { HttpErrorHandlingInterceptor } from './http-error-handling.interceptor';

describe('HttpErrorHandlingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpErrorHandlingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpErrorHandlingInterceptor = TestBed.inject(HttpErrorHandlingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
