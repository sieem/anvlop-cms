import { Component, OnInit } from '@angular/core';
import { Project } from '@anvlop/shared/interfaces';
import { switchMapTo } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '@anvlop/ui/shared';

@Component({
  selector: 'anvlop-overview-project',
  templateUrl: './overview-project.component.html',
  styleUrls: ['./overview-project.component.scss']
})
export class OverviewProjectComponent implements OnInit {
  projectsEvent$ = new BehaviorSubject(true);

  projects$ = this.projectsEvent$.pipe(
    switchMapTo(this.api.get<Project[]>('projects'))
  );

  sortablejsOptions = {
    onUpdate: event => this.updateProjects()
  };

  projects: Project[] = [];


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.projects$.subscribe((projects) => this.projects = projects);
  }
  
  async deleteProject(id: string) {
    await this.api.delete<Project>(`/api/project/${id}`).toPromise();
    this.projectsEvent$.next(true);
  }

  updateProjects() {
    this.api.patch<any>(`/api/projects`, this.projects).toPromise();
  }

  trackByProject(i: number, item: Project) {
    return item._id;
  }
}
