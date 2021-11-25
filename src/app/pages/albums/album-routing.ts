import { Routes } from '@angular/router';

import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumViewComponent } from './album-view/album-view.component';
import { AlbumsComponent } from './albums.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {

        path: 'list',
        data: {
          breadcrumb: 'List'
        },
        component: AlbumListComponent

      },
      {
        path: 'list/:id',
        component: AlbumViewComponent
      }
    ]
  },

]


export { routes };
