import { Component } from '@angular/core'; 
import { Topic } from '../model/topic.model';
import { SubTopic } from '../model/subtopic.model';

@Component({
  selector: 'topic-detail',
  templateUrl: '../template/topic-detail.component.html',
  styleUrls: ['../style/topic-detail.component.css']
})

export class TopicDetailComponent {
  topic:Topic;
  subTopics:Array<SubTopic>;
  constructor(){
    this.topic = new Topic("topic1","Topic Title", "some topic Description","https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/24px-Tux.svg.png")
    this.subTopics = [
      new SubTopic("st1","Sub Topic 1", "mucho html"),
      new SubTopic("st2","Sub Topic 2", "mucho html"),
      new SubTopic("st3","Sub Topic 2", "mucho html")
    ];
  }
 
}
