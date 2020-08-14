import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { UiAdminProjectModule, uiAdminProjectsRoutes } from '@anvlop/ui/admin/projects';
import { UiAdminAuthModule, uiAdminAuthRoutes } from '@anvlop/ui/admin/auth';
import { UiAdminPagesModule, uiAdminPagesRoutes } from '@anvlop/ui/admin/pages';
import { UiAdminCategoriesModule, uiAdminCategoriesRoutes } from '@anvlop/ui/admin/categories';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';

export const uiAdminMainRoutes: Route[] = [
  { path: 'projects', children: uiAdminProjectsRoutes },
  { path: 'auth', children: uiAdminAuthRoutes },
  { path: 'pages', children: uiAdminPagesRoutes },
  { path: 'categories', children: uiAdminCategoriesRoutes },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UiAdminProjectModule,
    UiAdminAuthModule,
    UiAdminPagesModule,
    UiAdminCategoriesModule,
    RouterModule.forRoot(uiAdminMainRoutes),
  ],
  declarations: [NavComponent, HomeComponent],
  bootstrap: [HomeComponent],
  exports: [HomeComponent]
})
export class UiAdminMainModule {}
