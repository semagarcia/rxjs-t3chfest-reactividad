import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompOneComponent } from './components/comp-one/comp-one.component';
import { CompTwoComponent } from './components/comp-two/comp-two.component';
import { CompThreeComponent } from './components/comp-three/comp-three.component';
import { HeaderComponent } from './components/header/header.component';

import { AuthenticationService } from './core';

@NgModule({
  declarations: [
    AppComponent,
    CompOneComponent,
    CompTwoComponent,
    CompThreeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
