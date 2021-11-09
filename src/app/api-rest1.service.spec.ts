import { TestBed } from '@angular/core/testing';

import { ApiRest1Service } from './api-rest1.service';

describe('ApiRest1Service', () => {
  let service: ApiRest1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRest1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
