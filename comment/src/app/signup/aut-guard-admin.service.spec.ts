import { TestBed } from '@angular/core/testing';

import { AutGuardAdminService } from './aut-guard-admin.service';

describe('AutGuardAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutGuardAdminService = TestBed.get(AutGuardAdminService);
    expect(service).toBeTruthy();
  });
});
