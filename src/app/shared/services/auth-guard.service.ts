import {Router} from '@angular/router';
import {CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {GoogleauthService} from './googleauth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor( private googleAuth: GoogleauthService, private  router: Router) { }

  canActivate() {
    return this.googleAuth.user$.map(user => {
      if (user) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    });
  }
}
