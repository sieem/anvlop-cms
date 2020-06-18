import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { IProject } from '@anvlop/api-interfaces';
import { allowedFileTypes } from '@anvlop/constants';
import { UploadService } from '../../services/upload.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'anvlop-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {
  @Input('projectId') projectId: string;
  @Input('projectForm') projectForm: FormGroup;
  @Input('assets') assets: FormArray;
  @Input('projectLoaded') projectLoaded: Observable<IProject>;
  public uploadProgress: number;
  private projectLoadedSubcription: Subscription; 

  constructor(
    private uploadService: UploadService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.projectLoadedSubcription = this.projectLoaded.subscribe((project) => {
      // remove the default empty field
      this.assets.removeAt(0);

      for (const asset of project.assets) {
        this.addAsset(asset);
      }
    });
  }

  addAsset(asset: string = '') {
    this.assets.push(new FormControl(asset));
  }

  removeAsset(asset:string) {
    this.assets.removeAt(this.assets.value.indexOf(asset));
  }

  onFileChange(event) {
    if (!!event.target.files) {
      for (const asset of event.target.files) {
        if (allowedFileTypes.indexOf(asset.type) === -1) {
          this.toastr.error(asset.type, `Filetype not supported`);
          continue;
        }

        const formData = new FormData();
        formData.append('asset', asset);

        this.uploadService.upload(this.projectId, formData).subscribe(
          (res) => {
            if (res && res.filename) {
              this.addAsset(res.filename);
            }

            if (res && res.progress) {
              this.uploadProgress = res.progress
            }
          },
          (err) => console.log(err)
        );
      }
    }
  }

  ngOnDestroy() {
    this.projectLoadedSubcription.unsubscribe();
  }
}
