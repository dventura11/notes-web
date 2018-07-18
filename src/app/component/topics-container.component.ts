import { Component } from '@angular/core';
import { Topic } from '../model/topic.model';

@Component({
  selector: 'topics-container',
  templateUrl: '../template/topics-container.component.html',
  // styleUrls: ['./app.component.css']
})
export class TopicsContainerComponent {
  topics:Array<Topic>;
  constructor(){
    this.topics = [
      new Topic("Topic1", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/24px-Tux.svg.png");
      new Topic("Topic2", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/24px-Tux.svg.png");
    ];
}
