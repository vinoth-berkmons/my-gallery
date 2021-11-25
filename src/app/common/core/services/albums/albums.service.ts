import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat, EMPTY, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { env_params } from 'src/environments/environment';
import { Album, Photo } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  url = env_params.apiEndPoint;

  constructor(private http: HttpClient) { }

  getAlbums() {
    const url = `${env_params.apiEndPoint}/albums`;
    return this.http.get<Album[]>(url);
  }
}
