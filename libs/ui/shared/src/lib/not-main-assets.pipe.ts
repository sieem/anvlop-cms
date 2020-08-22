import { Pipe, PipeTransform } from '@angular/core';
import { Project, IAsset } from '@anvlop/shared/interfaces';

@Pipe({
  name: 'NotMainAssets'
})
export class NotMainAssetsPipe implements PipeTransform {

  transform(value: Project): IAsset[] {
    return value.assets.filter(asset => !asset.mainAsset);
  }

}
