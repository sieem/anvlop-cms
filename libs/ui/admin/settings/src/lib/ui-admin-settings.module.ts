import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { UiSharedModule } from '@anvlop/ui/shared';
import { UiAdminSharedModule} from '@anvlop/ui/admin/shared';
import { EditSettingsComponent } from './components/edit-settings/edit-settings.component';
import { SettingPipe } from './pipes/setting.pipe';

export const uiAdminSettingsRoutes: Route[] = [
  {
    path: '',
    component: EditSettingsComponent
  },
];

@NgModule({
  imports: [
    UiSharedModule,
    UiAdminSharedModule,
  ],
  declarations: [EditSettingsComponent, SettingPipe],
  exports: [EditSettingsComponent],
})
export class UiAdminSettingsModule {}

