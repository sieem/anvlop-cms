import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ICategory } from '@anvlop/shared/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'anvlop-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public categoryForm: FormGroup;
  public assets: FormArray;
  public categoryId: string;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      slug: ['', [Validators.required]],
    });

    this.route.params.subscribe(async (params) => {
      if (!params.categoryId) {
        return;
      }
      
      this.categoryId = params.categoryId;
      try {
        const category: ICategory = await this.http.get<any>('/api/category/' + this.categoryId).toPromise();

        this.categoryForm.setValue({
          title: category.title,
          slug: category.slug,
        });

      } catch (error) {
        console.log(error);
        this.toastr.error(error, `Error`);
      }

    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.categoryForm.invalid) {
      this.toastr.error('Invalid form');
      return;
    }

    const body = { ...this.categoryForm.value }

    if (this.categoryId) {
      this.http.put<any>(`/api/category/${this.categoryId}`, body).subscribe(
        (res: any) => {
          this.toastr.info('Saved that damn thing.');
        },
        err => this.toastr.error(err.error, `Error ${err.status}: ${err.statusText}`)
      );
    } else {
      this.http.post<any>(`/api/category`, body).subscribe(
        (res: any) => {
          this.toastr.info('Saved that damn thing.');
          this.router.navigate(['categories', 'edit', res.categoryId]);
        },
        err => this.toastr.error(err.error, `Error ${err.status}: ${err.statusText}`)
      )
    }
  }
}
