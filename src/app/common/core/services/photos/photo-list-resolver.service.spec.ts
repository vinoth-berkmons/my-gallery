import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PhotoListResolverService } from './photo-list-resolver.service';

describe('PhotoListResolverService', () => {
  let service: PhotoListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PhotoListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
