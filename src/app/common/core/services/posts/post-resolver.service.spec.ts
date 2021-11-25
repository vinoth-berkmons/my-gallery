import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PostResolverService } from './post-resolver.service';

describe('PostResolverService', () => {
  let service: PostResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PostResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
