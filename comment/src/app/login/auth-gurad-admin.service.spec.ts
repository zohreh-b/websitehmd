import { TestBed } from '@angular/core/testing';

import { AuthGuradAdminService } from './auth-gurad-admin.service';

describe('AuthGuradAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuradAdminService = TestBed.get(AuthGuradAdminService);
    expect(service).toBeTruthy();
  });
});
