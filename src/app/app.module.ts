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
import { ProfileDetailTileComponent } from './shared/profile-detail-tile/profile-detail-tile.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileViewGridItemComponent } from './profile-view/profile-view-grid-item/profile-view-grid-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeFeedComponent,
    ImageDetailTileComponent,
    CommentComponent,
    PersonViewComponent,
    PersonViewTileComponent,
    ProfileDetailTileComponent,
    ProfileViewComponent,
    ProfileViewGridItemComponent
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
