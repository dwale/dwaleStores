import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user$: Observable<firebase.User>;

  constructor(private angularAuth: AngularFireAuth) {
    this.user$ = angularAuth.authState;
  }

  ngOnInit() {
  }

  logOut() {
    this.angularAuth.auth.signOut();
  }

}
