import { Component, OnInit } from '@angular/core';
import { Page } from '@anvlop/shared/interfaces';
import { switchMapTo } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '@anvlop/ui/shared';

@Component({
  selector: 'anvlop-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {
  pagesEvent$ = new BehaviorSubject(true);

  pages$ = this.pagesEvent$.pipe(
    switchMapTo(this.api.get<Page[]>('pages'))
  );

  sortablejsOptions = {
    onUpdate: event => this.updatePages()
  };

  pages: Page[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.pages$.subscribe((pages) => this.pages = pages);
  }
  
  async deletePage(id: string) {
    await this.api.delete<Page>(`page/${id}`).toPromise();
    this.pagesEvent$.next(true);
  }

  updatePages() {
    this.api.patch<any>(`pages`, this.pages).toPromise();
  }

  trackByPage(i: number, item: Page) {
    return item._id;
  }
}
