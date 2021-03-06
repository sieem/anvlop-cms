import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ISetting } from '@anvlop/shared/interfaces';
import { ApiService } from '@anvlop/ui/shared';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'anvlop-edit-settings',
  templateUrl: './edit-settings.component.html',
  styleUrls: ['./edit-settings.component.scss']
})
export class EditSettingsComponent implements OnInit {

  public settingsForm: FormGroup;
  public settingsFormArray: FormArray;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private api: ApiService,
    private settingsService: SettingsService,
  ) { }

  async ngOnInit() {

    this.settingsFormArray = this.formBuilder.array([]);
    
    this.settingsForm = this.formBuilder.group({
      settings: this.settingsFormArray
    });

    try {
      const settings: ISetting[] = await this.api.get<any>('settings').toPromise();

      for (const configSetting of this.settingsService.initSettings) {
        const foundSetting = settings.find((el) => el.slug === configSetting.slug);
        this.settingsFormArray.push(this.formBuilder.group({
          slug: [configSetting.slug, []],
          value: [foundSetting ? foundSetting.value : '', []],
        }))
      }


    } catch (error) {
      console.log(error);
      this.toastr.error(error, `Error`);
    }

  }

  onSubmit() {
    this.submitted = true;

    if (this.settingsForm.invalid) {
      this.toastr.error('Invalid form');
      return;
    }

    const body = { ...this.settingsForm.value }.settings.filter((el) => !!el.value);

    this.api.post<any>(`settings`, body).subscribe(
      (res: any) => {
        this.toastr.info('Saved that damn thing.');
      },
      err => this.toastr.error(err.error, `Error ${err.status}: ${err.statusText}`)
    )
  }

}
