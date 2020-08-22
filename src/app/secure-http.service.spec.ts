import { TestBed } from '@angular/core/testing';

import { SecureHttpService } from './secure-http.service';

describe('SecureHttpService', () => {
  let service: SecureHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecureHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
