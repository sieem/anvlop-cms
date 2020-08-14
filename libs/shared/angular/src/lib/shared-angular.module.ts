import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUrlPipe } from './file-url.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [FileUrlPipe],
  exports: [FileUrlPipe],
})
export class SharedAngularModule {}
