import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IPage } from '@anvlop/shared/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'anvlop-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public pageForm: FormGroup;
  public assets: FormArray;
  public id: string;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.pageForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      slug: ['', [Validators.required]],
    });

    this.route.params.subscribe(async (params) => {
      if (!params.id) {
        return;
      }
      
      this.id = params.id;
      try {
        const page: IPage = await this.http.get<any>('/api/page/' + this.id).toPromise();

        this.pageForm.setValue({
          title: page.title,
          slug: page.slug,
        });

      } catch (error) {
        console.log(error);
        this.toastr.error(error, `Error`);
      }

    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.pageForm.invalid) {
      this.toastr.error('Invalid form');
      return;
    }

    const body = { ...this.pageForm.value }

    if (this.id) {
      this.http.put<any>(`/api/page/${this.id}`, body).subscribe(
        (res: any) => {
          this.toastr.info('Saved that damn thing.');
        },
        err => this.toastr.error(err.error, `Error ${err.status}: ${err.statusText}`)
      );
    } else {
      this.http.post<any>(`/api/page`, body).subscribe(
        (res: any) => {
          this.toastr.info('Saved that damn thing.');
          this.router.navigate(['pages', 'edit', res.id]);
        },
        err => this.toastr.error(err.error, `Error ${err.status}: ${err.statusText}`)
      )
    }
  }
}
