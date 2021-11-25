import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AlbumsService } from './albums.service';

describe('AlbumsService', () => {
  let service: AlbumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AlbumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
