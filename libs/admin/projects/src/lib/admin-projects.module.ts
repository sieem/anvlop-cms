import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';

export const adminProjectsRoutes: Route[] = [
  {
    path: '',
    component: OverviewComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [OverviewComponent],
  exports: [OverviewComponent],
})
export class AdminProjectsModule {}
