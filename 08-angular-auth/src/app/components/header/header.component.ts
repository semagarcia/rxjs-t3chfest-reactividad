import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AuthenticationService } from './../../core';

@Component({
  selector: 'demo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  loginStatus: boolean;

  constructor(private _authSrv: AuthenticationService) { }

  ngOnInit() {
    this._authSrv.getAuthChanges().subscribe(
      (result: { logged: boolean, user?: string, profile?: string }) => this.loginStatus = result.logged
    );
  }

  loginLogout() {
    if(this.loginStatus) {
      this._authSrv.logOut();
    } else {
      this._authSrv.logIn();
    }
  }

}
