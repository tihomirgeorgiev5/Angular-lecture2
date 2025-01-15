import { TestBed } from '@angular/core/testing';

import { NewOneService } from './new-one.service';

describe('NewOneService', () => {
  let service: NewOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
