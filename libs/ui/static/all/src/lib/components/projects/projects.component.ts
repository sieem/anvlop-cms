import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { Project } from '@anvlop/shared/interfaces';

const projectsStateKey = 'projects';

@Component({
  selector: 'anvlop-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public readonly projects$: Observable<Project[]> = this.api.httpCall('/api/projects', projectsStateKey);

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
  }

}
