import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  logInState = 'Logged out';
  user: string;
  profile: string;

  constructor(private _authSrv: AuthenticationService) { }

  ngOnInit() {
    this._authSrv.getAuthChanges().subscribe(
      (result: { logged: boolean, user?: string, profile?: string }) => {
        if(result.logged) {
          this.logInState = 'Logged In';
          this.user = result.user;
          this.profile = result.profile;
        } else {
          this.logInState = 'Logged out';
          this.user = '';
          this.profile = '';
        }
      }
    );
  }

}
