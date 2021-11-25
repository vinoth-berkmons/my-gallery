import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  },

  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then((m) => m.PostsModule)
  },

  {
    path: 'albums',
    loadChildren: () => import('./albums/albums.module').then((m) => m.AlbumsModule),
    data: { title: 'Albums' }
  },
  {
    path: 'photos',
    loadChildren: () => import('./photos/photos.module').then((m) => m.PhotosModule)
  },

  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  }
]

export { Routing };
