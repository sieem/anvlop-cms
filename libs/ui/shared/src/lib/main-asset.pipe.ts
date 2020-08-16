import { Pipe, PipeTransform } from '@angular/core';
import { IAsset, Project } from '@anvlop/shared/interfaces';

@Pipe({
  name: 'mainAsset'
})
export class MainAssetPipe implements PipeTransform {

  transform(value: Project): IAsset {
    return value.assets.find(asset => asset.mainAsset);
  }

}
