import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.css']
})
export class DisplayPostComponent implements OnInit {

  constructor() { }

  @Input() public userId: number = 0;
  @Input() public id: string = "";
  @Input() public title: string = "";
  @Input() public body: string = "";

  ngOnInit(): void {
  }

}
