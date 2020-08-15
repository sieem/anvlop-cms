import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '@anvlop/shared/interfaces';
import { switchMapTo } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'anvlop-overview-project',
  templateUrl: './overview-project.component.html',
  styleUrls: ['./overview-project.component.scss']
})
export class OverviewProjectComponent implements OnInit {
  projectsEvent$ = new BehaviorSubject(true);

  projects$ = this.projectsEvent$.pipe(
    switchMapTo(this.http.get<Project[]>('/api/projects'))
  );


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  
  async deleteProject(projectId: string) {
    await this.http.delete<Project>(`/api/project/${projectId}`).toPromise();
    this.projectsEvent$.next(true);
  }

  trackByProject(i: number, item: Project) {
    return item._id;
  }
}
