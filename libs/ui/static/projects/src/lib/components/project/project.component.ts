import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';
import { Project } from '@anvlop/shared/interfaces';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isScullyGenerated, TransferStateService } from '@scullyio/ng-lib';

@Component({
  selector: 'anvlop-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project$: Observable<Project>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private readonly transferStateService: TransferStateService,
    private meta: Meta,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      if (!params.projectSlug) {
        return;
      }

      this.meta.addTags([
        { name: 'twitter:card', content: params.projectSlug }
      ]);

      this.project$ = isScullyGenerated()
      ? this.transferStateService.getState<Project>(params.projectSlug)
        : this.http.get<Project>(`http://localhost:3333/api/project/${params.projectSlug}`).pipe(
        tap(project => this.transferStateService.setState<Project>(params.projectSlug, project)));
    })
  }

}
