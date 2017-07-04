import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdIconModule, MdIconRegistry, MdMenuModule, MdToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {RestoComponent} from './resto/resto.component';

import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {CartComponent} from './cart/cart.component';
import {OrderService} from './order.service';

@NgModule({
  declarations: [
    AppComponent,
    RestoComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [MdIconRegistry, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
