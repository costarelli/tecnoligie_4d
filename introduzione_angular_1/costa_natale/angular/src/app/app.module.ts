import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';
import { PringlesComponent } from './pringles/pringles.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponentComponent,
    ThirdComponentComponent,
    FourthComponentComponent,
    PringlesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
