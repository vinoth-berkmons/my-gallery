import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PostsService } from '..';
import { PostResolved } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<PostResolved> {

  constructor(private postService: PostsService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<PostResolved> {
    const id = route.paramMap.get('id');
    console.log(id);
    if (!id) {
      const message = `Post id ${id} was not found`;
      console.error(message);
      return of({ post: null, error: message });
    }

    return this.postService.getPostById(id)
      .pipe(
        map(post => ({ post: post })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({ post: null, error: message });
        })
      );
  }
}
