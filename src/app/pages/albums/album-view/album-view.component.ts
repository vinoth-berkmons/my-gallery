import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Album, Photo } from 'src/app/common/core/models';

import FuzzySearch from 'fuzzy-search';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.scss']
})
export class AlbumViewComponent implements OnInit, OnDestroy {

  sub: Subscription = new Subscription();
  search: string = '';
  searcher: any;
  defaultImage: string = './assets/images/spinner.gif';
  album: Album;
  filteredAlbum: Album[] = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute,) {
    this.album = this.router.getCurrentNavigation()?.extras?.state?.data;
  }

  ngOnInit(): void {

    if (this.album) {
      this.searcher = new FuzzySearch(this.album?.photos, ['title'], {
        caseSensitive: true,
      });
    }

    this.filteredAlbum = this.searcher?.search(this.search);

    this.sub = this.activatedRoute.queryParams.subscribe((params: Params): void => {

      this.search = params.search;
      this.filteredAlbum = this.searcher ? this.searcher?.search(this.search) : this.album?.photos;


    });
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }
  searchAlbum(val: string) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        search: val
      },
      queryParamsHandling: 'merge',
    });
  }

}
