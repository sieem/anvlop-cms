import { Pipe, PipeTransform } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Pipe({
  name: 'settingType'
})
export class SettingTypePipe implements PipeTransform {

  constructor(
    private settingsService: SettingsService,
  ) { }

  transform(value: string): unknown {
    const foundSetting = this.settingsService.initSettings.find((el) => el.setting === value);
    return foundSetting ? foundSetting.type : null;
  }

}
