import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class GoogleauthService {
  user$: Observable<firebase.User>;

  constructor(private angularAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = angularAuth.authState;
  }

  googleLogin() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.angularAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logOut() {
    this.angularAuth.auth.signOut();
  }
}
