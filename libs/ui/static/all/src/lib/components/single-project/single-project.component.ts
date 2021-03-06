import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '@anvlop/shared/interfaces';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'anvlop-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {
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

      this.project$ = this.api.httpCall(`project/${params.projectSlug}`, params.projectSlug);
    })
  }

}
