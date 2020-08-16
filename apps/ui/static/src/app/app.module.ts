import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UiStaticAllModule } from '@anvlop/ui/static/all';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiStaticAllModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
