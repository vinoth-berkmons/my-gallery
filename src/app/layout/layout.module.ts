import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { Routing } from '../pages/routing';
import { LayoutComponent } from './layout.component';
import { AsideComponent } from './shared-layout/aside/aside.component';
import { HeaderComponent } from './shared-layout/header/header.component';
import { BreadcrumbComponent } from './shared-layout/breadcrumb/breadcrumb.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: Routing
  }
];

@NgModule({
  declarations: [
    LayoutComponent,
    AsideComponent,
    HeaderComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports: [RouterModule],
})
export class LayoutModule { }
