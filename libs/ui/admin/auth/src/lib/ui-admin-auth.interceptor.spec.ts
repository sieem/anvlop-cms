import { TestBed } from '@angular/core/testing';

import { UiAdminAuthInterceptor } from './ui-admin-auth.interceptor';

describe('UiAdminAuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UiAdminAuthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UiAdminAuthInterceptor = TestBed.inject(UiAdminAuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
