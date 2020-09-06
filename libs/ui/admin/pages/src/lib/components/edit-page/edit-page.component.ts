import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IPage } from '@anvlop/shared/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@anvlop/ui/shared';

@Component({
  selector: 'anvlop-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  public pageForm: FormGroup;
  public assets: FormArray;
  public id: string;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.pageForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      slug: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });

    this.route.params.subscribe(async (params) => {
      if (!params.id) {
        return;
      }
      
      this.id = params.id;
      try {
        const page: IPage = await this.api.get<any>('page/' + this.id).toPromise();

        this.pageForm.setValue({
          title: page.title,
          slug: page.slug,
          content: page.content,
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
      this.api.put<any>(`page/${this.id}`, body).subscribe(
        (res: any) => {
          this.toastr.info('Saved that damn thing.');
        },
        err => this.toastr.error(err.error, `Error ${err.status}: ${err.statusText}`)
      );
    } else {
      this.api.post<any>(`page`, body).subscribe(
        (res: any) => {
          this.toastr.info('Saved that damn thing.');
          this.router.navigate(['pages', 'edit', res.id]);
        },
        err => this.toastr.error(err.error, `Error ${err.status}: ${err.statusText}`)
      )
    }
  }
}
