import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AuthenticationService } from './../../core';

@Component({
  selector: 'demo-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompOneComponent implements OnInit {
  state: object;

  constructor(private authSrv: AuthenticationService) { }

  ngOnInit() {
    this.authSrv.getAuthChanges().subscribe(
      (obj) => this.state = obj
    );
  }

}
