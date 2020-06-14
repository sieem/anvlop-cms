import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { IProject } from '@anvlop/api-interfaces';
import { UploadService } from '../../services/upload.service';

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
  public uploadResponse: any = { status: '', message: '', filePath: '' };
  private projectLoadedSubcription: Subscription; 

  constructor(
    private uploadService: UploadService,
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

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const asset = event.target.files[0];

      const formData = new FormData();
      formData.append('asset', asset);

      this.uploadService.upload(this.projectId, formData).subscribe(
        (res) => {
          if (res && res.message === 100) {
            this.addAsset(asset.name)
          }
          this.uploadResponse = res
        },
        (err) => console.log(err)
      );
      
    }
  }

  ngOnDestroy() {
    this.projectLoadedSubcription.unsubscribe();
  }
}
