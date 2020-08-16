import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '@anvlop/shared/interfaces';
import { switchMapTo } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'anvlop-overview-category',
  templateUrl: './overview-category.component.html',
  styleUrls: ['./overview-category.component.scss']
})
export class OverviewCategoryComponent implements OnInit {
  categoriesEvent$ = new BehaviorSubject(true);

  categories$ = this.categoriesEvent$.pipe(
    switchMapTo(this.http.get<Category[]>('/api/categories'))
  );

  sortablejsOptions = {
    onUpdate: event => this.updateCategories()
  };

  categories: Category[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.categories$.subscribe((categories) => this.categories = categories);
  }
  
  async deleteCategory(id: string) {
    await this.http.delete<Category>(`/api/category/${id}`).toPromise();
    this.categoriesEvent$.next(true);
  }

  updateCategories() {
    this.http.patch<any>(`/api/categories`, this.categories).toPromise();
  }

  trackByCategory(i: number, item: Category) {
    return item._id;
  }
}
