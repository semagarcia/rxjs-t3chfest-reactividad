import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AuthenticationService } from './../../core';

@Component({
  selector: 'demo-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrls: ['./comp-three.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompThreeComponent implements OnInit {
  state: object;

  constructor(private authSrv: AuthenticationService) { }

  ngOnInit() {
    this.authSrv.getAuthChanges().subscribe(
      (obj) => this.state = obj
    );
  }

}
