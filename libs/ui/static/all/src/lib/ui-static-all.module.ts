import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { UiSharedModule } from '@anvlop/ui/shared';

import { ProjectsComponent } from './components/projects/projects.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';
import { AppComponent } from './components/app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

export const uiStaticAllRoutes: Route[] = [
  { path: '', component: ProjectsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:projectSlug', component: SingleProjectComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(uiStaticAllRoutes),
    ScullyLibModule,
    UiSharedModule,
  ],
  declarations: [
    AppComponent,
    ProjectsComponent,
    SingleProjectComponent,
  ],
  bootstrap: [AppComponent],
  exports: [AppComponent],
})
export class UiStaticAllModule {}
