import { Injectable } from '@angular/core';
import { ApiService } from './services/api.service';
import { Observable } from 'rxjs';
import { Setting } from '@anvlop/shared/interfaces';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SettingsStoreService {
  public readonly settings$: Observable<Setting[]> = this.api.httpCall('settings', 'settings').pipe(shareReplay(1));

  constructor(
    private api: ApiService,
  ) { }

  async getSettingsValue(setting: string): Promise<any> {
    console.log(setting);
    const settings = await this.settings$.toPromise();
    return settings.find((el) => el.setting === setting).value
  }
}
