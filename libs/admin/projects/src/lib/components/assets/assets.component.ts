import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { IProject, IAsset } from '@anvlop/api-interfaces';
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
      for (const asset of project.assets) {
        this.addAsset(asset);
      }
    });
  }

  addAsset(asset:IAsset) {
    this.assets.push(new FormGroup({
      mainAsset: new FormControl(asset.mainAsset),
      src: new FormControl(asset.src)
    }));
  }

  removeAsset(asset:string) {
    const assetsFlat = this.assets.value.map((el) => el.src);
    this.assets.removeAt(assetsFlat.indexOf(asset));
  }

  makeMainAsset(asset) {
    for (const assetControl of this.assets.controls) {
      let mainAsset = null;
      if (assetControl.value.src === asset) {
        mainAsset = true;
      }

      assetControl.setValue({
        mainAsset,
        src: assetControl.value.src,
      });
    }
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
              this.addAsset({
                src: res.filename
              });
            }

            if (res && res.progress) {
              this.uploadProgress = res.progress
            }
          },
          (err) => console.log(err)
        );
      }

      event.target.value = '';
    }
  }

  ngOnDestroy() {
    this.projectLoadedSubcription.unsubscribe();
  }
}
