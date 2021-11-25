import { Routes } from '@angular/router';

import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoViewComponent } from './photo-view/photo-view.component';
import { PhotosComponent } from './photos.component';

import { PhotoResolverService } from '../../common/core/services/photos/photo-resolver.service';
import { PhotoListResolverService } from '../../common/core/services/photos/photo-list-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: PhotosComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: PhotoListComponent,
        resolve: { resolvedData: PhotoListResolverService }
      },
      {
        path: 'list/:id',
        component: PhotoViewComponent,
        resolve: { resolvedData: PhotoResolverService }
      }
    ]
  },

]


export { routes };
