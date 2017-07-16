import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeFeedComponent } from './home-feed/home-feed.component';
import { ImageDetailTileComponent } from './home-feed/image-detail-tile/image-detail-tile.component';
import { CommentComponent } from './home-feed/image-detail-tile/comment/comment.component';
import { PersonViewComponent } from './person-view/person-view.component';
import { PersonViewTileComponent } from './person-view/person-view-tile/person-view-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeFeedComponent,
    ImageDetailTileComponent,
    CommentComponent,
    PersonViewComponent,
    PersonViewTileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
