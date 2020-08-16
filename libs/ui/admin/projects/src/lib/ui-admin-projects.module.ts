import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill'
import { SortablejsModule } from 'ngx-sortablejs';

import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { OverviewProjectComponent } from './components/overview-project/overview-project.component';
import { AssetsProjectComponent } from './components/assets-project/assets-project.component';
import { UiSharedModule } from '@anvlop/ui/shared';


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
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    SortablejsModule.forRoot({ animation: 150 }),
    UiSharedModule,
  ],
  declarations: [OverviewProjectComponent, EditProjectComponent, AssetsProjectComponent],
  exports: [OverviewProjectComponent, EditProjectComponent],
})
export class UiAdminProjectModule {}
