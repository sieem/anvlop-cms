import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsBlockComponent } from './projects-block/projects-block.component';
import { SingleProjectBlockComponent } from './single-project-block/single-project-block.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProjectsBlockComponent, SingleProjectBlockComponent],
})
export class UiStaticBlocksModule {}
