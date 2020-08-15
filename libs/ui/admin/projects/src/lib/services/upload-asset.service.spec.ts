import { TestBed } from '@angular/core/testing';

import { UploadAssetService } from './upload-asset.service';

describe('UploadAssetService', () => {
  let service: UploadAssetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadAssetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
