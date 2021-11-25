import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AlbumsComponent } from './albums.component';

import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumViewComponent } from './album-view/album-view.component';
import { RouterModule } from '@angular/router';
import { routes } from '../albums/album-routing';

@NgModule({
  declarations: [AlbumsComponent, AlbumListComponent, AlbumViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    LazyLoadImageModule,
    RouterModule.forChild(routes)
  ]
})
export class AlbumsModule { }
