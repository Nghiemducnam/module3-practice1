import { TestBed } from '@angular/core/testing';

import { ButtonServiceService } from './button-service.service';

describe('ButtonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ButtonServiceService = TestBed.get(ButtonServiceService);
    expect(service).toBeTruthy();
  });
});
