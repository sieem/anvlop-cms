import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '@anvlop/shared/interfaces';
import { Observable } from 'rxjs';
import { ApiService } from '@anvlop/ui/static/services';

@Component({
  selector: 'anvlop-single-project-block',
  templateUrl: './single-project-block.component.html',
  styleUrls: ['./single-project-block.component.scss']
})
export class SingleProjectBlockComponent implements OnInit {
  project$: Observable<Project>;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      if (!params.projectSlug) {
        return;
      }

      this.project$ = this.api.httpCall(`/api/project/${params.projectSlug}`, params.projectSlug);
    })
  }

}
