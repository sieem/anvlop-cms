import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { UiAdminProjectModule, uiAdminProjectsRoutes } from '@anvlop/ui/admin/projects';
import { UiAdminAuthModule, uiAdminAuthRoutes } from '@anvlop/ui/admin/auth';
import { UiAdminPagesModule, uiAdminPagesRoutes } from '@anvlop/ui/admin/pages';
import { UiAdminCategoriesModule, uiAdminCategoriesRoutes } from '@anvlop/ui/admin/categories';
import { UiAdminSettingsModule, uiAdminSettingsRoutes } from '@anvlop/ui/admin/settings';
import { IsLoggedInGuard } from '@anvlop/ui/admin/auth';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorHandlingInterceptor } from './interceptors/http-error-handling.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { UiAdminSharedModule } from '@anvlop/ui/admin/shared';

export const uiAdminMainRoutes: Route[] = [
  { path: '', component: HomeComponent, canActivate: [IsLoggedInGuard] },
  { path: 'projects', children: uiAdminProjectsRoutes, canActivate: [IsLoggedInGuard] },
  { path: 'auth', children: uiAdminAuthRoutes },
  { path: 'pages', children: uiAdminPagesRoutes, canActivate: [IsLoggedInGuard] },
  { path: 'categories', children: uiAdminCategoriesRoutes, canActivate: [IsLoggedInGuard] },
  { path: 'settings', children: uiAdminSettingsRoutes, canActivate: [IsLoggedInGuard] },
];

@NgModule({
  imports: [
    UiAdminSharedModule,
    UiAdminProjectModule,
    UiAdminAuthModule,
    UiAdminPagesModule,
    UiAdminCategoriesModule,
    UiAdminSettingsModule,
    RouterModule.forRoot(uiAdminMainRoutes),
  ],
  declarations: [NavComponent, HomeComponent, AppComponent],
  bootstrap: [HomeComponent],
  exports: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorHandlingInterceptor,
      multi: true
    },
  ],
})
export class UiAdminMainModule {}
