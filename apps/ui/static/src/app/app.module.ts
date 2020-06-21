import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { UiStaticHomeModule, uiStaticHomeRoutes } from '@anvlop/ui/static/home';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', children: uiStaticHomeRoutes },
        { path: 'projects', loadChildren: () => import('@anvlop/ui/static/projects').then(m => m.UiStaticProjectsModule) },
      ],
      { initialNavigation: 'enabled' }
    ),
    UiStaticHomeModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
