import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiAdminMainModule } from '@anvlop/ui/admin/main';
import { UiAdminAuthInterceptor } from '@anvlop/ui/admin/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
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
