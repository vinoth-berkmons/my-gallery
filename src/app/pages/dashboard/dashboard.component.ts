import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MyApp } from 'src/app/common/core/models';

import { AlbumsService, PhotosService, PostsService } from '../../common/core/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

// MyApp Data holds List of Album, Photos and Post
  myApp: MyApp;

  myAppData$: Observable<MyApp>;

  //default image with loader
  defaultImage: string = './assets/images/spinner.gif';


  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostsService,
    private photosService: PhotosService,
    private albumService: AlbumsService
  ) {

    // Get data from resolver
    const resolvedData: MyApp = this.activatedRoute.snapshot.data['resolvedData'];
    this.myApp = resolvedData;
  }

  ngOnInit(): void {

  }

}


