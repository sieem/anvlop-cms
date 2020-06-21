import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { ProjectComponent } from './components/project/project.component';

export const uiStaticProjectsRoutes: Route[] = [
  {
    path: '',
    component: OverviewComponent
  },
  {
    path: ':projectSlug',
    component: ProjectComponent
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(uiStaticProjectsRoutes)],
  declarations: [OverviewComponent, ProjectComponent],
})
export class UiStaticProjectsModule {}
