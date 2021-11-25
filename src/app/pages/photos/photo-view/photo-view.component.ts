import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo, PhotoResolved } from 'src/app/common/core/models';

@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.scss']
})
export class PhotoViewComponent implements OnInit {

  public photo: Photo;


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const resolvedData: PhotoResolved = this.activatedRoute.snapshot.data['resolvedData'];
    this.photo = resolvedData?.photo;
  }


}
