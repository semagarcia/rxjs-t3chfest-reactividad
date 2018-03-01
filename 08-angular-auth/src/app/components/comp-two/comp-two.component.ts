import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthenticationService } from './../../core';

@Component({
  selector: 'demo-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompTwoComponent implements OnInit {
  state: object;

  constructor(private authSrv: AuthenticationService) { }

  ngOnInit() {
    let subscription: Subscription = this.authSrv.getAuthChanges().subscribe(
      (obj) => {
        this.state = obj;
        subscription.unsubscribe();
      }
    );
  }

}
