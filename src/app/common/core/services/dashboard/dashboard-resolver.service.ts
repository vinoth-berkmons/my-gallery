import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AlbumsService, PhotosService, PostsService } from '..';
import { Album, MyApp, Photo, Post } from '../../models';




@Injectable({
  providedIn: 'root'
})
export class DashboardResolverService implements Resolve<MyApp> {

  constructor(
    private postService: PostsService,
    private photosService: PhotosService,
    private albumService: AlbumsService
  ) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<MyApp> {

    const getPosts$ = this.postService.getPosts();
    const getPhotos$ = this.photosService.getPhotos();
    const getAlbums$ = this.albumService.getAlbums();

    return combineLatest([getPosts$, getPhotos$, getAlbums$]).pipe(
      switchMap(([posts, photos, albums]) => {
        const mappedData = mapData(posts, photos, albums);
        return of(mappedData)
      })
    )
  }
}




function mapData(posts: Post[], photos: Photo[], albums: Album[]): MyApp {
  return {
    albums: albums,
    photos: photos,
    posts: posts
  }
}
