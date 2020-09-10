import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '@anvlop/shared/interfaces';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'anvlop-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent implements OnInit {
  page$: Observable<Page>;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      if (!params.pageSlug) {
        return;
      }

      this.page$ = this.api.httpCall(`page/${params.pageSlug}`, params.pageSlug);
    })
  }

}
