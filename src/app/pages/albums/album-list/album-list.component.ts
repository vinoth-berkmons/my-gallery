import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, EMPTY, Observable, Subscription } from 'rxjs';

import FuzzySearch from 'fuzzy-search';
import { Album, Photo } from 'src/app/common/core/models';
import { AlbumsService, PhotosService } from 'src/app/common/core/services';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit, OnDestroy {

  sub: Subscription = new Subscription();
  albums: Album[];
  visibleAlbum: Album[] = [];

  firstPage: number = 1;
  currentPage: number = 1;
  search: string = '';
  searcher: any;
  filteredAlbum: Album[] = [];

  sortValue: string = ''

  getAlbums$ = this.albumService.getAlbums();
  getPhotos$ = this.photosService.getPhotos();

  constructor(
    private albumService: AlbumsService,
    private photosService: PhotosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  private mapAlbums(albums: Album[], photo: Photo[]) {

    albums.forEach(album => {
      album.photos = photo.filter(p => p.albumId === album.id)
    }
    )
    return albums;

  }
  ngOnInit(): void {

    combineLatest([this.getAlbums$, this.getPhotos$]).pipe(
      switchMap(([albums, photos]) => {
        this.albums = this.mapAlbums(albums, photos);
        this.searcher = new FuzzySearch(this.albums, ['title'], {
          caseSensitive: true,
        });
        this.filteredAlbum = this.searcher.search(this.search);
        this.visibleAlbum = this.filteredAlbum ? this.filteredAlbum.slice((this.currentPage - 1) * 10, this.currentPage * 10) : [];
        return EMPTY;
      })
    ).subscribe()


    this.sub = this.activatedRoute.queryParams.subscribe((params: Params): void => {
      this.currentPage = +params.page ? +params.page : 1;
      if (this.currentPage < this.firstPage) {
        this.firstPage = this.currentPage;
      } else if (this.currentPage > this.firstPage + 2) {
        this.firstPage = this.currentPage - 2;
      }
      this.search = params.search;
      this.sortValue = params.sort;
      this.filteredAlbum = this.searcher ? this.searcher.search(this.search) : this.albums;
      this.filteredAlbum = this.filteredAlbum ? this.filteredAlbum.sort((a, b) => {
        if (a[this.sortValue] < b[this.sortValue]) {
          return -1;
        }
        if (a[this.sortValue] > b[this.sortValue]) {
          return 1;
        }
        return 0;
      }) : this.filteredAlbum;

      this.visibleAlbum = this.filteredAlbum ? this.filteredAlbum.slice((this.currentPage - 1) * 10, this.currentPage * 10) : [];

    });


  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }

  pageChanged(page: number): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page: page === 0 ? 1 : page,
        search: this.search
      },
      queryParamsHandling: 'merge',
    });
  }

  searchAlbum(val: string) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page: this.currentPage,
        search: val
      },
      queryParamsHandling: 'merge',
    });
  }

  sortAlbum(value: string) {
    console.log(value)
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page: this.currentPage,
        search: this.search,
        sort: value
      },
      queryParamsHandling: 'merge',
    });
  }

  selectAlbum(album: Album) {
    const id = album.id;
    this.router.navigate([`../list/${id}`],
      {
        relativeTo: this.activatedRoute,
        state: {
          data: album
        }
      });
  }

}
