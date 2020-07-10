import { Component, OnInit } from '@angular/core';
import { ApiService } from '@anvlop/ui/static/services';
import { Project } from '@anvlop/shared/interfaces';
import { Observable } from 'rxjs';

const projectsStateKey = 'projects';

@Component({
  selector: 'anvlop-projects-block',
  templateUrl: './projects-block.component.html',
  styleUrls: ['./projects-block.component.scss']
})
export class ProjectsBlockComponent implements OnInit {
  public readonly projects$: Observable<Project[]> = this.api.httpCall('/api/projects', projectsStateKey);

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
  }

}
