import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import * as firebase from 'firebase';
import {AppUser} from '../models/app-user';
import {UserService} from './user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';


@Injectable()
export class GoogleauthService {
  user$: Observable<firebase.User>;

  constructor(private userService: UserService, private angularAuth: AngularFireAuth, private route: ActivatedRoute) {
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
  get appUser$(): Observable<AppUser> {
    return this.user$
      .switchMap(user => {
        if (user) {return this.userService.getUser(user.uid); } else {return Observable.of(null); }
      });
  }
}
