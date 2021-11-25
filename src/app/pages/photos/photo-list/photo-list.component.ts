import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import FuzzySearch from 'fuzzy-search';
import { Subscription } from 'rxjs';
import { Photo, PhotoListResolved } from 'src/app/common/core/models';
import { PhotosService } from 'src/app/common/core/services';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  sub: Subscription = new Subscription();
  search: string = '';
  searcher: any;
  defaultImage: string = './assets/images/spinner.gif';

  firstPage: number = 1;
  currentPage: number = 1;

  photos: Photo[];
  visiblePhoto: Photo[] = [];

  filteredPhotos: Photo[] = [];
  sortValue: string = ''
  constructor(
    private activatedRoute: ActivatedRoute,
    private photosService: PhotosService,
    private router: Router) {

  }

  ngOnInit(): void {

    const resolvedData: PhotoListResolved = this.activatedRoute.snapshot.data['resolvedData'];
    this.photos = resolvedData?.photos;
    this.searcher = new FuzzySearch(this.photos, ['title'], {
      caseSensitive: true,
    });
    this.filteredPhotos = this.searcher.search(this.search);
    this.visiblePhoto = this.filteredPhotos ? this.filteredPhotos.slice((this.currentPage - 1) * 10, this.currentPage * 10) : [];

    this.sub = this.activatedRoute.queryParams.subscribe((params: Params): void => {
      this.currentPage = +params.page ? +params.page : 1;
      if (this.currentPage < this.firstPage) {
        this.firstPage = this.currentPage;
      } else if (this.currentPage > this.firstPage + 2) {
        this.firstPage = this.currentPage - 2;
      }

      this.search = params.search;
      this.sortValue = params.sort;
      this.filteredPhotos = this.filteredPhotos ? this.filteredPhotos.sort((a, b) => {
        if (a[this.sortValue] < b[this.sortValue]) {
          return -1;
        }
        if (a[this.sortValue] > b[this.sortValue]) {
          return 1;
        }
        return 0;
      }) : this.filteredPhotos;
      this.filteredPhotos = this.searcher ? this.searcher.search(this.search) : this.photos;
      this.visiblePhoto = this.filteredPhotos ? this.filteredPhotos.slice((this.currentPage - 1) * 10, this.currentPage * 10) : [];
      console.log(' this.visiblePhoto', this.visiblePhoto);
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

  searchPhoto(val: string) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        search: val,
        sort: this.sortValue
      },
      queryParamsHandling: 'merge',
    });
  }

  sortPhoto(value: string) {
    console.log(value)
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        search: this.search,
        sort: value
      },
      queryParamsHandling: 'merge',
    });
  }

  selectPhoto(id: number) {
    this.router.navigate([`../list/${id}`], { relativeTo: this.activatedRoute });
  }
}
