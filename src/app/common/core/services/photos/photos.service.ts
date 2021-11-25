import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env_params } from 'src/environments/environment';
import { Photo } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  url = env_params.apiEndPoint;

  constructor(private http: HttpClient) { }

  getPhotos() : Observable<Photo[]> {
    const url = `${env_params.apiEndPoint}/photos`;
    return this.http.get<Photo[]>(url);
  }

  getPhotosById(id: string) : Observable<Photo> {
    const url = `${env_params.apiEndPoint}/photos/${id}`;
    return this.http.get<Photo>(url);
  }
}
