import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
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
    component: ProjectsComponent,
    children: [
      {
        path: ':slug',
        component: SingleProjectComponent,
      }
    ]
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HomeComponent, ProjectsComponent, SingleProjectComponent, AboutComponent],
})
export class UiStaticPagesModule {}
