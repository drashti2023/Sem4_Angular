import { TestBed } from '@angular/core/testing';

import { MockapiService } from './mockapi.service';

describe('MockapiService', () => {
  let service: MockapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
