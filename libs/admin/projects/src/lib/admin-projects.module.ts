import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './components/edit/edit.component';

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
    path: 'edit/:projectSlug',
    component: EditComponent
  },
];

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  declarations: [OverviewComponent, EditComponent],
  exports: [OverviewComponent, EditComponent],
})
export class AdminProjectModule {}
