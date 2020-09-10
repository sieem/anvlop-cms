import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiSharedModule } from '@anvlop/ui/shared';
import { EditSettingsComponent } from './components/edit-settings/edit-settings.component';
import { SettingTypePipe } from './pipes/setting-type.pipe';

export const uiAdminSettingsRoutes: Route[] = [
  {
    path: '',
    component: EditSettingsComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule,
    FormsModule,
    ReactiveFormsModule,
    UiSharedModule,
    QuillModule.forRoot(),
  ],
  declarations: [EditSettingsComponent, SettingTypePipe],
  exports: [EditSettingsComponent],
})
export class UiAdminSettingsModule {}

