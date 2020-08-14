import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiAdminMainModule, uiAdminMainRoutes } from '@anvlop/ui/admin/main';
import { UiAdminAuthInterceptor } from '@anvlop/ui/admin/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', children: uiAdminMainRoutes },
      ],
      { initialNavigation: 'enabled' }
    ),
    UiAdminMainModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UiAdminAuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
