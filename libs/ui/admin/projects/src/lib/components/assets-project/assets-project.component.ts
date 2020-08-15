import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { IProject, IAsset } from '@anvlop/shared/interfaces';
import { allowedFileTypes, maxAssetFileSize } from '@anvlop/shared/constants';
import { UploadService } from '../../services/upload.service';
import { ToastrService } from 'ngx-toastr';
import { IFile } from '@anvlop/shared/interfaces';
import { v4 as guid } from 'uuid';

@Component({
  selector: 'anvlop-assets-project',
  templateUrl: './assets-project.component.html',
  styleUrls: ['./assets-project.component.scss']
})
export class AssetsProjectComponent implements OnInit, OnDestroy {
  @Input() projectId: string;
  @Input() projectForm: FormGroup;
  @Input() assets: FormArray;
  @Input() projectLoaded: Observable<IProject>;
  public uploadProgress: number;
  private projectLoadedSubcription: Subscription; 

  constructor(
    private uploadService: UploadService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.projectLoadedSubcription = this.projectLoaded.subscribe((project) => {
      if (!project.assets.length) {
        return this.addAsset();
      }
      for (const asset of project.assets) {
        this.addAsset(asset);
      }
    });
  }

  generateFilesForm(files) {
    const filesForm = new FormArray([]);
    if (files) {
      for (const file of files) {
        filesForm.push(new FormGroup({
          src: new FormControl(file.src),
          type: new FormControl(file.type),
        }));
      }
    }
    return filesForm;
  }

  addAsset(asset: IAsset = { id: guid() }) {
    this.assets.push(new FormGroup({
      id: new FormControl(asset.id), 
      mainAsset: new FormControl(asset.mainAsset),
      files: this.generateFilesForm(asset.files),
    }));
  }

  removeAsset(asset: string) {
    const assetsFlat = this.assets.value.map((el) => el.src);
    this.assets.removeAt(assetsFlat.indexOf(asset));
  }

  removeFile(fileSrc: string, asset) {
    const assetsFlat = asset.value.files.map((file: IFile) => file.src);
    asset.controls.files.removeAt(assetsFlat.indexOf(fileSrc));
  }

  makeMainAsset(assetId) {
    for (const assetControl of this.assets.controls) {
      let mainAsset = false;
      if (assetControl.value.id === assetId) {
        mainAsset = true;
      }

      assetControl.patchValue({
        mainAsset,
      });
    }
  }

  findAsset(assetId) {
    return this.assets.controls.find(asset => asset.value.id === assetId);
  }

  onFileChange(event, assetId) {
    if (!!event.target.files) {
      for (const asset of event.target.files) {
        if (allowedFileTypes.indexOf(asset.type) === -1) {
          this.toastr.error(asset.type, `Filetype not supported`);
          continue;
        }

        if (asset.size > maxAssetFileSize) {
          this.toastr.error(asset.name, `Filesize too big, max size is ${maxAssetFileSize / 1024 / 1024} MB`);
          continue;
        }

        const formData = new FormData();
        formData.append('asset', asset);

        this.uploadService.upload(this.projectId || 'newProject', formData).subscribe(
          (res) => {
            if (res && res.src) {
              const newAsset = res as IFile;
              const assetToUpdate = this.findAsset(assetId);
              const fileToAdd = new FormGroup({
                src: new FormControl(newAsset.src),
                type: new FormControl(newAsset.type),
              });

              const filesToUpdate = <FormArray>assetToUpdate.get('files');
              filesToUpdate.push(fileToAdd);

              assetToUpdate.patchValue({
                files: [filesToUpdate],
              })
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
