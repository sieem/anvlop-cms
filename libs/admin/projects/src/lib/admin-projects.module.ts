import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill'

import { EditComponent } from './components/edit/edit.component';
import { AssetsComponent } from './components/assets/assets.component';

import { SortablejsModule } from 'ngx-sortablejs';

export const adminProjectsRoutes: Route[] = [
  {
    path: '',
    component: OverviewComponent
  },
  {
    path: 'edit/new',
    component: EditComponent
  },
  {
    path: 'edit/:projectId',
    component: EditComponent
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
  ],
  declarations: [OverviewComponent, EditComponent, AssetsComponent],
  exports: [OverviewComponent, EditComponent],
})
export class AdminProjectModule {}
