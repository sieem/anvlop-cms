import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { UiAdminSharedModule } from '@anvlop/ui/admin/shared';
import { LoginComponent } from './components/login/login.component';

export const uiAdminAuthRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [
    UiAdminSharedModule,
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class UiAdminAuthModule {}
