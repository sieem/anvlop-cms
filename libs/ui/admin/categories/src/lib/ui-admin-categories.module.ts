import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiSharedModule } from '@anvlop/ui/shared';
import { SortablejsModule } from 'ngx-sortablejs';

import { OverviewCategoryComponent } from './components/overview-category/overview-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';



export const uiAdminCategoriesRoutes: Route[] = [
  {
    path: '',
    component: OverviewCategoryComponent
  },
  {
    path: 'new',
    component: EditCategoryComponent
  },
  {
    path: 'edit/:id',
    component: EditCategoryComponent
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
    SortablejsModule.forRoot({ animation: 150 }),
  ],
  declarations: [OverviewCategoryComponent, EditCategoryComponent],
  exports: [OverviewCategoryComponent, EditCategoryComponent],
})
export class UiAdminCategoriesModule { }