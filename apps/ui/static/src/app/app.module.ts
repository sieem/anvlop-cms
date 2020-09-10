import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UiStaticAllModule } from '@anvlop/ui/static/all';

import { APP_CONFIG } from '@anvlop/shared/config';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiStaticAllModule,
  ],
  providers: [
    { provide: APP_CONFIG, useValue: environment }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
