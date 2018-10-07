import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';
import {GoogleauthService} from '../../services/googleauth.service';
import {AppUser} from '../../models/app-user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  appUser: AppUser;

  constructor(public googleAuth: GoogleauthService) {
    googleAuth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  ngOnInit() {
  }

 logOut() {
    this.googleAuth.logOut();
 }

}
