import { TestBed } from '@angular/core/testing';

import { SimpleDivService } from './simple-div.service';

describe('SimpleDivService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleDivService = TestBed.get(SimpleDivService);
    expect(service).toBeTruthy();
  });
});
