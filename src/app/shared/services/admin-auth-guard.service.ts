import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {GoogleauthService} from './googleauth.service';
import 'rxjs/add/operator/map';
import {UserService} from './user.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private googleAuth: GoogleauthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.googleAuth.appUser$
    .map(appUser => appUser.isAdmin);
  }
}
