import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdButtonModule, MdCardModule, MdDialogModule, MdToolbarModule, MdIconModule, MdSidenavModule } from '@angular/material';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { Angular2FlexModule } from 'angular2-flex';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RestoComponent } from './resto/resto.component';

import { RouterModule } from '@angular/router';
import { routes } from "./app.routes";
import { environment } from '../environments/environment';
import { OauthDialogComponent } from './oauth-dialog/oauth-dialog.component';
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentComponent } from './content/content.component';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';
import { PhoneDialogComponent } from './phone-dialog/phone-dialog.component';

let providers = {
  "google": {
    "clientId": "836283806820-ntnpm7pm85pj2k958i9jnib5m9ago7vp.apps.googleusercontent.com"
  }
};


@NgModule({
  declarations: [
    AppComponent,
    RestoComponent,
    OauthDialogComponent,
    MenuComponent,
    SidenavComponent,
    ContentComponent,
    HomeDialogComponent,
    PhoneDialogComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'oRESTo'),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    Angular2SocialLoginModule,
    MdDialogModule,
    MdToolbarModule,
    Angular2FlexModule.forRoot(),
    MdSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OauthDialogComponent,HomeDialogComponent,PhoneDialogComponent]
})
export class AppModule { }
Angular2SocialLoginModule.loadProvidersScripts(providers);
