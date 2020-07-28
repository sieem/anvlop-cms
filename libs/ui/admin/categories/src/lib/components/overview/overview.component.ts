import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '@anvlop/shared/interfaces';
import { switchMapTo } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'anvlop-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  categoriesEvent$ = new BehaviorSubject(true);

  categories$ = this.categoriesEvent$.pipe(
    switchMapTo(this.http.get<Category[]>('/api/categories'))
  );


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  
  async deleteCategory(categoryId: string) {
    await this.http.delete<Category>(`/api/category/${categoryId}`).toPromise();
    this.categoriesEvent$.next(true);
  }

  trackByCategory(i: number, item: Category) {
    return item._id;
  }
}
