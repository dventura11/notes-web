import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopicsContainerComponent } from './component/topics-container.component';
import { TopicDetailComponent } from './component/topic-detail.component';
import { HeaderComponent } from './component/header.component';
import { LoginComponent } from './component/login.component';
import { UserMenuComponent } from './component/user-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsContainerComponent,
    TopicDetailComponent,
    HeaderComponent,
    LoginComponent,
    UserMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
