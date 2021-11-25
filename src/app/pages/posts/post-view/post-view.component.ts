import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostResolved, Post as Post } from 'src/app/common/core/models';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  post: Post;


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const resolvedData: PostResolved = this.activatedRoute.snapshot.data['resolvedData'];
    this.post = resolvedData?.post;
  }

}
