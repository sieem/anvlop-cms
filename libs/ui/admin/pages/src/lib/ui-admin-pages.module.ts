import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { UiSharedModule } from '@anvlop/ui/shared';
import { UiAdminSharedModule} from '@anvlop/ui/admin/shared';

import { OverviewPageComponent } from './components/overview-page/overview-page.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';


export const uiAdminPagesRoutes: Route[] = [
  {
    path: '',
    component: OverviewPageComponent
  },
  {
    path: 'new',
    component: EditPageComponent
  },
  {
    path: 'edit/:id',
    component: EditPageComponent
  },
];

@NgModule({
  imports: [
    UiSharedModule,
    UiAdminSharedModule,
  ],
  declarations: [OverviewPageComponent, EditPageComponent],
  exports: [OverviewPageComponent, EditPageComponent],
})
export class UiAdminPagesModule { }