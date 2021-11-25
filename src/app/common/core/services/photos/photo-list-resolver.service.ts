import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { PhotosService } from '..';
import { PhotoListResolved } from '../../models';



@Injectable({
  providedIn: 'root'
})
export class PhotoListResolverService implements Resolve<PhotoListResolved> {

  constructor(private photoService: PhotosService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<PhotoListResolved> {

      return this.photoService.getPhotos()
      .pipe(
        map(photos => ({ photos: photos })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({ photos: null, error: message });
        })
      );
  }
}
