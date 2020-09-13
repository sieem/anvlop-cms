import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { UiSharedModule } from '@anvlop/ui/shared';

import { ProjectsComponent } from './components/projects/projects.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';
import { AppComponent } from './components/app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SinglePageComponent } from './components/single-page/single-page.component';
import { AssetComponent } from './components/asset/asset.component';

export const uiStaticAllRoutes: Route[] = [
  { path: '', component: ProjectsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:projectSlug', component: SingleProjectComponent },
  { path: 'pages/:pageSlug', component: SinglePageComponent },
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
    HeaderComponent,
    NavComponent,
    FooterComponent,
    SinglePageComponent,
    AssetComponent,
  ],
  bootstrap: [AppComponent],
  exports: [AppComponent],
})
export class UiStaticAllModule {}
