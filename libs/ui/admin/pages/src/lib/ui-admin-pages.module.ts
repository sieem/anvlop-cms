import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill'

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
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
  ],
  declarations: [OverviewPageComponent, EditPageComponent],
  exports: [OverviewPageComponent, EditPageComponent],
})
export class UiAdminPagesModule { }