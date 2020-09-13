import { Pipe, PipeTransform } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Pipe({
  name: 'setting'
})
export class SettingPipe implements PipeTransform {

  constructor(
    private settingsService: SettingsService,
  ) { }

  transform(value: string, argument: string): string | any {
    const foundSetting = this.settingsService.initSettings.find((el) => el.setting === value);
    return foundSetting ? foundSetting[argument] : null;
  }

}
