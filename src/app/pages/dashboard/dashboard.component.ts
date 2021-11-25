import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyApp } from 'src/app/common/core/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

// MyApp Data holds List of Album, Photos and Post
  public myApp: MyApp;

  //default image with loader
  defaultImage: string = './assets/images/spinner.gif';


  constructor(
    private activatedRoute: ActivatedRoute
  ) {

    // Get data from resolver
    const resolvedData: MyApp = this.activatedRoute.snapshot.data['resolvedData'];
    this.myApp = resolvedData;
  }

  ngOnInit(): void {

  }

}


