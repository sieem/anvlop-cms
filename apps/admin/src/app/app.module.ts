import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {
  AdminProjectsModule,
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
    AdminProjectsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
