import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
