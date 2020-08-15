import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUrlPipe } from './file-url.pipe';
import { SlugDirective } from './slug.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [FileUrlPipe, SlugDirective],
  exports: [FileUrlPipe, SlugDirective],
})
export class SharedAngularModule {}
