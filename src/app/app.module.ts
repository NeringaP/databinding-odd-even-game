import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddElementComponent } from './odd-element/odd-element.component';
import { EvenElementComponent } from './even-element/even-element.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddElementComponent,
    EvenElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
