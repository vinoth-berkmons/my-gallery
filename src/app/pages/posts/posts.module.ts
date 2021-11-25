import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PostListComponent } from './post-list/post-list.component';
import { PostViewComponent } from './post-view/post-view.component';

import {routes} from './posts-routing';
import { PostsService } from 'src/app/common/core/services';

@NgModule({
  declarations: [PostsComponent, PostListComponent, PostViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PostsModule { }
