import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeFeedComponent } from './home-feed/home-feed.component';
import { ImageDetailTileComponent } from './home-feed/image-detail-tile/image-detail-tile.component';
import { CommentComponent } from './home-feed/image-detail-tile/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeFeedComponent,
    ImageDetailTileComponent,
    CommentComponent
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
