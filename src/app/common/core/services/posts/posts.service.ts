import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable, Subject } from 'rxjs';


import { env_params } from '../../../../../environments/environment';
import { Post } from '../../models';


/*  Environment */
/* Model */
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = env_params.apiEndPoint;

  constructor(private http: HttpClient) { }

  getPosts() {
    const url = `${env_params.apiEndPoint}/posts`;
    return this.http.get<Post[]>(url);
  }

  getPostById(id: string): Observable<Post> {
    const url = `${env_params.apiEndPoint}/posts/${id}`;
    return this.http.get<Post>(url);
  }
}
