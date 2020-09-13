import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
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

  async getSettingsValue(slug: string): Promise<any> {
    const settings = await this.settings$.toPromise();
    const foundSetting = settings.find((el) => el.slug === slug);
    return foundSetting ? foundSetting.value : null;
  }
}
