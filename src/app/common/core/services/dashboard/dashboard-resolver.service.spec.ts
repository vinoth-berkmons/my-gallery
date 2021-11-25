import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DashboardResolverService } from './dashboard-resolver.service';

describe('DashboardResolverService', () => {
  let service: DashboardResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(DashboardResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
