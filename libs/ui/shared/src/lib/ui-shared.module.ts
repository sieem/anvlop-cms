import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUrlPipe } from './pipes/file-url.pipe';
import { SlugDirective } from './directives/slug.directive';
import { MainAssetPipe } from './main-asset.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [FileUrlPipe, SlugDirective, MainAssetPipe],
  exports: [FileUrlPipe, SlugDirective, MainAssetPipe],
})
export class UiSharedModule {}
