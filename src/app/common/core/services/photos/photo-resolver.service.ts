import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { PhotosService } from '..';
import { PhotoResolved } from '../../models';


@Injectable({
  providedIn: 'root'
})
export class PhotoResolverService implements Resolve<PhotoResolved> {

  constructor(private photoService: PhotosService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<PhotoResolved> {
    const id = route.paramMap.get('id');
    console.log(id);
    if (!id) {
      const message = `Photo id ${id} was not found`;
      console.error(message);
      return of({ photo: null, error: message });
    }

    return this.photoService.getPhotosById(id)
      .pipe(
        map(photo => ({ photo: photo })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({ photo: null, error: message });
        })
      );
  }
}
