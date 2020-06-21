import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '@anvlop/api-interfaces';
import { switchMapTo } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'anvlop-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
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
