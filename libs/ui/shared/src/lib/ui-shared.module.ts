import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUrlPipe } from './pipes/file-url.pipe';
import { SlugDirective } from './directives/slug.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [FileUrlPipe, SlugDirective],
  exports: [FileUrlPipe, SlugDirective],
})
export class UiSharedModule {}
