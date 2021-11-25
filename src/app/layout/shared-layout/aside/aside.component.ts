import { Component, OnInit } from '@angular/core';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'bi bi-speedometer', class: '' },
  { path: '/posts', title: 'Posts', icon: 'bi bi-file-post', class: '' },
  { path: '/albums', title: 'Album', icon: 'bi bi-journal-album', class: '' },
  { path: '/photos', title: 'Photos', icon: 'bi bi-images', class: '' }
];

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {


  constructor() { }

  menuItems: RouteInfo[];


  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }


}
