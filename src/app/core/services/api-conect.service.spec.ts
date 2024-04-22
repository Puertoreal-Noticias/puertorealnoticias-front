import { TestBed } from '@angular/core/testing';

import { ApiConectService } from './api-conect.service';

describe('ApiConectService', () => {
  let service: ApiConectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiConectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
