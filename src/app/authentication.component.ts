import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-authentication',
  template: `
    <div *ngIf="afAuth.authState | async as user; else showLogin">
      <h1>Hello {{ user.displayName }}!</h1>
      <button (click)="logout()">Logout</button>
    </div>
    <ng-template #showLogin>
      <p>Please login.</p>
      <button mat-raised-button color="primary" (click)="login()">Login with Google</button>
    </ng-template>
  `,
})
export class AppAuthentication {
  constructor(public afAuth: AngularFireAuth) {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
