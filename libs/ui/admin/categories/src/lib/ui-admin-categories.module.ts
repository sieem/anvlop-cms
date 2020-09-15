import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { UiSharedModule } from '@anvlop/ui/shared';
import { UiAdminSharedModule} from '@anvlop/ui/admin/shared';

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
    UiSharedModule,
    UiAdminSharedModule,
  ],
  declarations: [OverviewCategoryComponent, EditCategoryComponent],
  exports: [OverviewCategoryComponent, EditCategoryComponent],
})
export class UiAdminCategoriesModule { }