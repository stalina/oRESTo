import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule, MdButtonModule, MdCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {RestoComponent} from './resto/resto.component';

import {RouterModule} from '@angular/router';
import {routes} from "./app.routes";
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    RestoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'oRESTo'),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
