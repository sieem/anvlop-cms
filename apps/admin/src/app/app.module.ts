import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AdminProjectModule, adminProjectsRoutes } from '@anvlop/admin/projects';
import { AdminAuthModule, adminAuthRoutes } from '@anvlop/admin/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: 'projects', children: adminProjectsRoutes },
        { path: 'auth', children: adminAuthRoutes }
      ],
      { initialNavigation: 'enabled' }
    ),
    AdminProjectModule,
    AdminAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
