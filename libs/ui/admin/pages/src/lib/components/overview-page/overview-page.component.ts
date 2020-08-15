import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Page } from '@anvlop/shared/interfaces';
import { switchMapTo } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'anvlop-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {
  pagesEvent$ = new BehaviorSubject(true);

  pages$ = this.pagesEvent$.pipe(
    switchMapTo(this.http.get<Page[]>('/api/pages'))
  );


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  
  async deletePage(pageId: string) {
    await this.http.delete<Page>(`/api/page/${pageId}`).toPromise();
    this.pagesEvent$.next(true);
  }

  trackByPage(i: number, item: Page) {
    return item._id;
  }
}
