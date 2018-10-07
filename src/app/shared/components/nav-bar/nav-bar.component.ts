import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';
import {GoogleauthService} from '../../services/googleauth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public googleAuth: GoogleauthService) {
  }

  ngOnInit() {
  }

 logOut() {
    this.googleAuth.logOut();
 }

}
