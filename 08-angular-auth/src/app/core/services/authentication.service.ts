import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationService {

  private authState$ = new Subject<object>();

  constructor() { }

  getAuthChanges() {
    return this.authState$;
  }

  logIn() {
    let result = {
      logged: true,
      user: 'Sema García',
      profile: 'USER'
    };
    this.authState$.next(result);
    return result;
  }

  logOut() {
    let result = {
      logged: false
    };
    this.authState$.next(result);
    return result;
  }

}
