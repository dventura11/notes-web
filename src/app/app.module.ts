import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopicsContainerComponent } from './component/topics-container.component';
import { TopicDetailComponent } from './component/topic-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsContainerComponent,
    TopicDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
