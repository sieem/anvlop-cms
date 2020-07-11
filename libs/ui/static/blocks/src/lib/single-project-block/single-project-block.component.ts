import { Component, OnInit, Input } from '@angular/core';
import { IProject } from '@anvlop/shared/interfaces';

@Component({
  selector: 'anvlop-single-project-block',
  templateUrl: './single-project-block.component.html',
  styleUrls: ['./single-project-block.component.scss']
})
export class SingleProjectBlockComponent implements OnInit {
  @Input() project: IProject;

  constructor(

  ) { }

  ngOnInit(): void {

  }

}
