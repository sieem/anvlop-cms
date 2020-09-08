import { Component, OnInit } from '@angular/core';
import { Category } from '@anvlop/shared/interfaces';
import { switchMapTo } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '@anvlop/ui/shared';

@Component({
  selector: 'anvlop-overview-category',
  templateUrl: './overview-category.component.html',
  styleUrls: ['./overview-category.component.scss']
})
export class OverviewCategoryComponent implements OnInit {
  categoriesEvent$ = new BehaviorSubject(true);

  categories$ = this.categoriesEvent$.pipe(
    switchMapTo(this.api.get<Category[]>('categories'))
  );

  sortablejsOptions = {
    onUpdate: event => this.updateCategories()
  };

  categories: Category[] = [];


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.categories$.subscribe((categories) => this.categories = categories);
  }
  
  async deleteCategory(id: string) {
    await this.api.delete<Category>(`category/${id}`).toPromise();
    this.categoriesEvent$.next(true);
  }

  updateCategories() {
    this.api.patch<any>(`categories`, this.categories).toPromise();
  }

  trackByCategory(i: number, item: Category) {
    return item._id;
  }
}
