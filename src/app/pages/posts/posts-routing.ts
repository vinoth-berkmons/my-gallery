import { Routes } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostsComponent } from './posts.component';

import { PostResolverService } from '../../common/core/services/posts/post-resolver.service'

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: PostListComponent,
        data: {
          breadcrumb: 'List'
        },
      },
      {
        path: 'list/:id',
        component: PostViewComponent,
        resolve: { resolvedData: PostResolverService }
      }
    ],

  },

]

export { routes };
