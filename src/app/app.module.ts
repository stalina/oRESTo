import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdButtonModule, MdCardModule, MdDialogModule } from '@angular/material';
import { Angular2SocialLoginModule } from "angular2-social-login";

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RestoComponent } from './resto/resto.component';

import { RouterModule } from '@angular/router';
import { routes } from "./app.routes";
import { environment } from '../environments/environment';
import { OauthDialogComponent } from './oauth-dialog/oauth-dialog.component';

let providers = {
  "google": {
    "clientId": "836283806820-ntnpm7pm85pj2k958i9jnib5m9ago7vp.apps.googleusercontent.com"
  }
};


@NgModule({
  declarations: [
    AppComponent,
    RestoComponent,
    OauthDialogComponent
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
    MdDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OauthDialogComponent]
})
export class AppModule { }
Angular2SocialLoginModule.loadProvidersScripts(providers);
