import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FileUrlPipe } from './pipes/file-url.pipe';
import { SlugDirective } from './directives/slug.directive';
import { MainAssetPipe } from './main-asset.pipe';
import { NotMainAssetsPipe } from './not-main-assets.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { FileNamePipe } from './pipes/file-name.pipe';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [FileUrlPipe, SlugDirective, MainAssetPipe, NotMainAssetsPipe, SafeHtmlPipe, FileNamePipe],
  exports: [FileUrlPipe, SlugDirective, MainAssetPipe, NotMainAssetsPipe, SafeHtmlPipe, FileNamePipe],
})
export class UiSharedModule {}
