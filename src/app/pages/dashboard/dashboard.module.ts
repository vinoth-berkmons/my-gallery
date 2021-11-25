import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';


import { DashboardComponent } from './dashboard.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PostsService } from '../../common/core/services'
import { DashboardResolverService } from '../../common/core/services/dashboard/dashboard-resolver.service';

/* Services */
const SERVICES = [
  PostsService
];


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    LazyLoadImageModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        resolve: { resolvedData: DashboardResolverService }
      }
    ])
  ],
  providers: [...SERVICES]
})
export class DashboardModule { }
