import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { MaterialModule } from './material.module'

import { AppComponent } from './app.component';
import { AppAuthentication } from './authentication.component'

@NgModule({
  declarations: [
    AppComponent, 
    AppAuthentication
  ],
  imports: [
    BrowserModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, 
    MaterialModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
