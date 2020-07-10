import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '@anvlop/shared/interfaces';
import { isScullyGenerated, TransferStateService } from '@scullyio/ng-lib';
import { tap } from 'rxjs/operators';

const projectsStateKey = 'projects';

@Component({
  selector: 'anvlop-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public readonly projects$ = isScullyGenerated()
    ? this.transferStateService.getState<Project[]>(projectsStateKey)
    : this.http.get<Project[]>('/api/projects').pipe(
      tap(projects => this.transferStateService.setState<Project[]>(projectsStateKey, projects)));

  constructor(
    private http: HttpClient,
    private readonly transferStateService: TransferStateService
    ) { }

  ngOnInit(): void {
  }

}
