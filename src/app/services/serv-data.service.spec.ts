import { TestBed } from '@angular/core/testing';

import { ServDataService } from './serv-data.service';

describe('ServDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServDataService = TestBed.get(ServDataService);
    expect(service).toBeTruthy();
  });
});
