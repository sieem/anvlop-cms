import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const uiStaticHomeRoutes: Route[] = [
  {
    path:'',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HomeComponent],
})
export class UiStaticHomeModule {}
