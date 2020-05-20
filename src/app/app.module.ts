import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReviewComponent } from './assignment/review/review.component';
import { ReviewtitleComponent } from './assignment/reviewtitle/reviewtitle.component';
import { ReviewdetailComponent } from './assignment/reviewdetail/reviewdetail.component';
import { ProfilepictureComponent } from './assignment/profilepicture/profilepicture.component';
import { ProfiledescriptionComponent } from './assignment/profiledescription/profiledescription.component';
import { ProfileactionsComponent } from './assignment/profileactions/profileactions.component';
import { AuthorComponent } from './assignment/author/author.component';
import { EngagementComponent } from './assignment/engagement/engagement.component';
import { ReviewcontainerComponent } from './assignment/reviewcontainer/reviewcontainer.component';
import { NgfordirectivesComponent } from './assignment2/ngfordirectives/ngfordirectives.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    ReviewComponent,
    ReviewtitleComponent,
    ReviewdetailComponent,
    ProfilepictureComponent,
    ProfiledescriptionComponent,
    ProfileactionsComponent,
    AuthorComponent,
    EngagementComponent,
    ReviewcontainerComponent,
    NgfordirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
