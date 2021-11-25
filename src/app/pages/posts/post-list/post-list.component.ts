import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import FuzzySearch from 'fuzzy-search';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/common/core/models';
import { PostsService } from 'src/app/common/core/services';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();
  private posts: Post[];
  public visiblePost: Post[] = [];

  public firstPage: number = 1;
  public currentPage: number = 1;
  public search: string = '';
  private searcher: any;
  public filteredPost: Post[] = [];

  public sortValue: string = ''



  constructor(
    private postService: PostsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.searcher = new FuzzySearch(this.posts, ['title'], {
        caseSensitive: true,
      });
      this.filteredPost = this.searcher.search(this.search);
      this.visiblePost = this.filteredPost ? this.filteredPost.slice((this.currentPage - 1) * 10, this.currentPage * 10) : [];
    })


    this.sub = this.activatedRoute.queryParams.subscribe((params: Params): void => {
      this.currentPage = +params.page ? +params.page : 1;
      if (this.currentPage < this.firstPage) {
        this.firstPage = this.currentPage;
      } else if (this.currentPage > this.firstPage + 2) {
        this.firstPage = this.currentPage - 2;
      }
      this.search = params.search;
      this.sortValue = params.sort;
      this.filteredPost = this.searcher ? this.searcher.search(this.search) : this.posts;
      this.filteredPost = this.filteredPost ? this.filteredPost.sort((a, b) => {
        if (a[this.sortValue] < b[this.sortValue]) {
          return -1;
        }
        if (a[this.sortValue] > b[this.sortValue]) {
          return 1;
        }
        return 0;
      }) : this.filteredPost;
      this.visiblePost = this.filteredPost ? this.filteredPost.slice((this.currentPage - 1) * 10, this.currentPage * 10) : [];

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
        search: this.search,
        sort: this.sortValue
      },
      queryParamsHandling: 'merge',
    });
  }

  searchPost(val: string) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page: this.currentPage,
        search: val,
        sort: this.sortValue
      },
      queryParamsHandling: 'merge',
    });
  }

  sortPost(value: string) {
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
  selectPost(id: number) {
    this.router.navigate([`../list/${id}`], { relativeTo: this.activatedRoute });
  }
}

