import { Component } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {PostService, PostInfo } from '../post.service'
 
@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }

  public loadedPosts: PostInfo[] = [];

  constructor(private thisPostService: PostService) {

  }

  public async testA() {
    console.log("1 Test A was called")
    const promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve('Promise returns after 1.5 second!');
      }, 1500);
    });
    await promise.then(function (value) {
      console.log(value);
      // Promise returns after 1.5 second!
    });
    console.log("2 This line shoiuld log immediately after test A was called")
  }
  private isNewPostsAvailableEventSubscribed: boolean = false;
  public testB() {
    // The order is important here.  If we subscribe FIRST, we can guarantee we will receive
    // all data provided by the event.  If we subscribe SECOND, we may not.
    if (!this.isNewPostsAvailableEventSubscribed) {
      this.thisPostService.newPostsAvailableEvent.subscribe((gotData) => {
        for (let currElementNo = 0; currElementNo < gotData.length; currElementNo++)
          this.loadedPosts.push(gotData[currElementNo]);
        console.log("Data arrived!  We got " + gotData.length.toString() + " records.");
      })
      this.isNewPostsAvailableEventSubscribed = true;
    }
    this.thisPostService.GetInfoFromServer();
  }
}
