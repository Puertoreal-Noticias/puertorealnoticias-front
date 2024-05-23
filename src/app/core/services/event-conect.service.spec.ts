import { TestBed } from '@angular/core/testing';

import { EventConectService } from './event-conect.service';

describe('EventConectService', () => {
  let service: EventConectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventConectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
