import { Component } from '@angular/core';
import {GoogleauthService} from './shared/services/googleauth.service';
import {Router} from '@angular/router';
import {UserService} from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor (private userService: UserService, private googleAuth: GoogleauthService, router: Router) {
  googleAuth.user$.subscribe(user => {
    if (user) {
      userService.saveUser(user);
      const returnUrl = localStorage.getItem('returnUrl');
      router.navigateByUrl(returnUrl);
    }
  });
}
}
