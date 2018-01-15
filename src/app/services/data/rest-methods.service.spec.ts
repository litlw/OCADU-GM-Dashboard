import { TestBed, inject } from '@angular/core/testing';

import { RestMethodsService } from './rest-methods.service';

describe('RestMethodsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestMethodsService]
    });
  });

  it('should be created', inject([RestMethodsService], (service: RestMethodsService) => {
    expect(service).toBeTruthy();
  }));
});
