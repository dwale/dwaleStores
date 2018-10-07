import { Component, OnInit } from '@angular/core';
import {GoogleauthService} from '../../shared/services/googleauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private googleAuth: GoogleauthService ) { }

  googleLogin() {
    this.googleAuth.googleLogin();
  }

}
