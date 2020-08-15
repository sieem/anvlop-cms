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


export const uiAdminCategoriesRoutes: Route[] = [
  {
    path: '',
    component: OverviewComponent
  },
  {
    path: 'new',
    component: EditComponent
  },
  {
    path: 'edit/:id',
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
  ],
  declarations: [OverviewComponent, EditComponent],
  exports: [OverviewComponent, EditComponent],
})
export class UiAdminCategoriesModule { }