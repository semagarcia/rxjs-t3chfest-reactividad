import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('emailField') emailField: ElementRef;
  @ViewChild('ojoIzquierdo') ojoIzquierdo: ElementRef;
  @ViewChild('ojoDerecho') ojoDerecho: ElementRef;
  @ViewChild('manoIzquierda') manoIzquierda: ElementRef;
  @ViewChild('manoDerecha') manoDerecha: ElementRef;

  stateMachine: Subject<string>;
  email: string;

  constructor(private render: Renderer2) {
    this.stateMachine = new Subject<string>();
    this.stateMachine.subscribe(
      (state) => {
        switch (state) {
          case 'normal':
            this.normalSight();
            break;
          case 'email':
            (this.email) ? this.calculateCursorPosition() : this.moveEyesTo(-2, 10);
            break;
          case 'write':
            this.calculateCursorPosition();
            break;
          case 'discover':
            this.discoverEyes();
            break;
          case 'password':
            this.hideEyes();
            break;
        }
      }
    );
  }

  calculateCursorPosition() {
    if (this.email && this.email.length > 0 && this.email.length < 20) {
      this.moveEyesTo(this.email.length * 0.33, 10);
    } else if (!this.email || this.email.length === 0) {
      this.moveEyesTo(-2, 10);
    } else if (this.email.length >= 20) {
      this.moveEyesTo(5, 10);
    }
  }

  normalSight() {
    this.moveEyesTo(0, 0);
  }

  discoverEyes() {
    this.normalSight();
    this.manoIzquierda.nativeElement.classList.remove('manoIzdArriba');
    this.manoDerecha.nativeElement.classList.remove('manoDerArriba');
  }

  hideEyes() {
    this.moveEyesTo(1, 10);
    this.manoIzquierda.nativeElement.classList.add('manoIzdArriba');
    this.manoDerecha.nativeElement.classList.add('manoDerArriba');
  }

  moveEyesTo(xAxis: number, yAxis: number) {
    this.render.setStyle(this.ojoDerecho.nativeElement, 'transform', `translate(${xAxis}px, ${yAxis}px)`);
    this.render.setStyle(this.ojoIzquierdo.nativeElement, 'transform', `translate(${xAxis}px, ${yAxis}px)`);
  }

  login() {
    this.stateMachine.next('login');
  }
}
