import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Project } from '@anvlop/shared/interfaces';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isScullyGenerated, TransferStateService } from '@scullyio/ng-lib';

@Component({
  selector: 'anvlop-single-project-block',
  templateUrl: './single-project-block.component.html',
  styleUrls: ['./single-project-block.component.scss']
})
export class SingleProjectBlockComponent implements OnInit {
  project$: Observable<Project>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private readonly transferStateService: TransferStateService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      if (!params.projectSlug) {
        return;
      }

      this.project$ = isScullyGenerated()
        ? this.transferStateService.getState<Project>(params.projectSlug)
        : this.http.get<Project>(`/api/project/${params.projectSlug}`).pipe(
          tap(project => this.transferStateService.setState<Project>(params.projectSlug, project)));
    })
  }

}
