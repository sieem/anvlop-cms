import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FileUrlPipe } from './pipes/file-url.pipe';
import { SlugDirective } from './directives/slug.directive';
import { MainAssetPipe } from './main-asset.pipe';
import { NotMainAssetsPipe } from './not-main-assets.pipe';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [FileUrlPipe, SlugDirective, MainAssetPipe, NotMainAssetsPipe],
  exports: [FileUrlPipe, SlugDirective, MainAssetPipe, NotMainAssetsPipe],
})
export class UiSharedModule {}
