import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { OverviewProjectComponent } from './components/overview-project/overview-project.component';
import { AssetsProjectComponent } from './components/assets-project/assets-project.component';
import { UiSharedModule } from '@anvlop/ui/shared';
import { UiAdminSharedModule} from '@anvlop/ui/admin/shared';


export const uiAdminProjectsRoutes: Route[] = [
  {
    path: '',
    component: OverviewProjectComponent,
  },
  {
    path: 'new',
    component: EditProjectComponent,
  },
  {
    path: 'edit/:id',
    component: EditProjectComponent,
  },
];

@NgModule({
  imports: [
    UiSharedModule,
    UiAdminSharedModule,
  ],
  declarations: [OverviewProjectComponent, EditProjectComponent, AssetsProjectComponent],
  exports: [OverviewProjectComponent, EditProjectComponent],
})
export class UiAdminProjectModule {}
