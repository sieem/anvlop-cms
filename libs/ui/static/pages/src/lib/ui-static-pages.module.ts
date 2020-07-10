import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { UiStaticBlocksModule } from '@anvlop/ui/static/blocks';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SingleProjectComponent } from './single-project/single-project.component';
import { AboutComponent } from './about/about.component';

export const uiStaticPagesRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'projects/:projectSlug',
    component: SingleProjectComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule, UiStaticBlocksModule],
  declarations: [HomeComponent, ProjectsComponent, SingleProjectComponent, AboutComponent],
})
export class UiStaticPagesModule {}
