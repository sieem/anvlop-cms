import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsBlockComponent } from './projects-block/projects-block.component';
import { SingleProjectBlockComponent } from './single-project-block/single-project-block.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ProjectsBlockComponent, SingleProjectBlockComponent],
  exports: [ProjectsBlockComponent, SingleProjectBlockComponent],
})
export class UiStaticBlocksModule {}
