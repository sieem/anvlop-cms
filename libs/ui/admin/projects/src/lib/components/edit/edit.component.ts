import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IProject } from '@anvlop/shared/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'anvlop-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public projectForm: FormGroup;
  public assets: FormArray;
  public projectId: string;
  public submitted = false;
  public projectLoaded: Subject<IProject> = new Subject<IProject>();

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      slug: ['', [Validators.required]],
      year: ['', []],
      description: ['', []],
      assets: this.formBuilder.array([])
    });

    this.assets = this.projectForm.get('assets') as FormArray;

    this.route.params.subscribe(async (params) => {
      if (!params.projectId) {
        return;
      }
      
      this.projectId = params.projectId;
      try {
        const project: IProject = await this.http.get<any>('/api/project/' + this.projectId).toPromise();

        this.projectForm.setValue({
          title: project.title,
          slug: project.slug,
          year: project.year,
          description: project.description,
          assets: []
        });

        this.projectLoaded.next(project);

      } catch (error) {
        console.log(error);
        this.toastr.error(error, `Error`);
      }

    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.projectForm.invalid) {
      this.toastr.error('Invalid form');
      return;
    }

    const body = { ...this.projectForm.value }

    if (this.projectId) {
      this.http.put<any>(`/api/project/${this.projectId}`, body).subscribe(
        (res: any) => {
          this.toastr.info('Saved that damn thing.');
        },
        err => this.toastr.error(err.error, `Error ${err.status}: ${err.statusText}`)
      );
    } else {
      this.http.post<any>(`/api/project`, body).subscribe(
        (res: any) => {
          this.toastr.info('Saved that damn thing.');
          this.router.navigate(['projects', 'edit', res.projectId]);
        },
        err => this.toastr.error(err.error, `Error ${err.status}: ${err.statusText}`)
      )
    }
  }
}
