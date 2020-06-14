import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AdminProjectModule, adminProjectsRoutes } from '@anvlop/admin/projects';
import { AdminAuthModule, adminAuthRoutes, AdminAuthInterceptor } from '@anvlop/admin/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AdminAuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
