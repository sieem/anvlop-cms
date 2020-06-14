import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {
  AdminProjectModule,
  adminProjectsRoutes,
} from '@anvlop/admin/projects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [{ path: 'projects', children: adminProjectsRoutes }],
      { initialNavigation: 'enabled' }
    ),
    AdminProjectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
