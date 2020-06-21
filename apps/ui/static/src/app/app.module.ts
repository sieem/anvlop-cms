import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { UiStaticHomeModule, uiStaticHomeRoutes } from '@anvlop/ui/static/home';
import { UiStaticProjectsModule, uiStaticProjectsRoutes } from '@anvlop/ui/static/projects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', children: uiStaticHomeRoutes },
        { path: 'projects', children: uiStaticProjectsRoutes },
      ],
      { initialNavigation: 'enabled' }
    ),
    UiStaticHomeModule,
    UiStaticProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
