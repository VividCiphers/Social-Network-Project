import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

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
import { DiscoverComponent } from './discover/discover.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SettingsViewComponent } from './settings-view/settings-view.component';

const routes: Routes = [
  { path: '', component: HomeFeedComponent },
  { path: 'feed', component: HomeFeedComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'profile', component: ProfileViewComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'settings', component: SettingsViewComponent },
];

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
    ProfileViewGridItemComponent,
    DiscoverComponent,
    SignUpComponent,
    SettingsViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
