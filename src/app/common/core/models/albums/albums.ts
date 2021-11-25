import { Photo } from "..";

export class Album {
  public userId: number;
  public id: number;
  public title: string;
  photos?: Photo[];

  constructor(userId: number, id: number, title: string, body: string, photo: Photo[]) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.photos = photo;
  }
}

export interface AlbumResolved {
  album: Album;
  error?: any;
}
