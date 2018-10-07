import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GoogleauthService {
  user$: Observable<firebase.User>;

  constructor(private angularAuth: AngularFireAuth ) {
    this.user$ = angularAuth.authState;
  }

  googleLogin() {
    this.angularAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logOut() {
    this.angularAuth.auth.signOut();
  }
}
