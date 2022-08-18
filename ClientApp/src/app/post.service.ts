import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }
  @Output() newPostsAvailableEvent = new EventEmitter<PostInfo[]>();
  private storedPostInfos: PostInfo[] = [];

  public GetInfoFromServer() {
    let apiUrl: string = "https://jsonplaceholder.typicode.com/posts"
    this.httpClient.get<PostInfo[]>(apiUrl).subscribe((gotData) => {
      this.storedPostInfos = gotData;
      this.newPostsAvailableEvent.emit(this.storedPostInfos)
    })
  }
}
export class PostInfo {
  public userId: number = 0;
  public id: string = "";
  public title: string = "";
  public body: string = "";
} 
