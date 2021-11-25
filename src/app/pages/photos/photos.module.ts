import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoViewComponent } from './photo-view/photo-view.component';
import { RouterModule } from '@angular/router';
import { routes } from './photo-routing';
import { FormsModule } from '@angular/forms';

import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [PhotosComponent, PhotoListComponent, PhotoViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    LazyLoadImageModule,
    RouterModule.forChild(routes)
  ]
})
export class PhotosModule { }
