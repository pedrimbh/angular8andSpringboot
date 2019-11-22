import { TestBed } from '@angular/core/testing';

import { RouteGuardLoginService } from './route-guard-login.service';

describe('RouteGuardLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteGuardLoginService = TestBed.get(RouteGuardLoginService);
    expect(service).toBeTruthy();
  });
});
